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
  email: string;
  pasword: string;
  name: string;
}

const initialState = {
  entities: [],
  loading: "idle",
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
  },
});

export default counterSlice.reducer;
