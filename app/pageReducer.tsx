import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface loginData {
  email: string;
  password: string;
  name: string;
}

export const login = createAsyncThunk(
  "auth/login",
  async (user: loginData, thunkAPI) => {
    // 邏輯檢查
    // const response = await userAPI.fetchById(userId);
    console.log(user);
    return user.email;
  }
);

interface AuthState {
  entities: [];
  loading: "idle" | "pending" | "succeeded" | "failed";
  login: boolean;
  email: string;
  pasword: string;
  name: string;
}

const initialState = {
  entities: [],
  loading: "idle",
  login: false,
  email: "",
  pasword: "",
  name: "",
} as AuthState;

export const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(login.fulfilled, (state, action) => {
      // Add user to the state array
      state.email = action.payload;
    });

    //  .addCase(fetchPosts.pending, (state, action) => {
    //   state.status = 'loading'
    // })
    // .addCase(fetchPosts.fulfilled, (state, action) => {
    //   state.status = 'succeeded'
    //   // Add any fetched posts to the array
    //   state.posts = state.posts.concat(action.payload)
    // })
    // .addCase(fetchPosts.rejected, (state, action) => {
    //   state.status = 'failed'
    //   state.error = action.error.message
    // })
  },
});

export default counterSlice.reducer;
