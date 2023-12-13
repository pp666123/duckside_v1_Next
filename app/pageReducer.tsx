import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface loginData {
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  "auth/login",
  async (user: loginData, thunkAPI) => {
    // 接API
    try {
      // const response = await AuthService.login(email, password);
      return user;
    } catch (err) {
      return thunkAPI.rejectWithValue("帳號未註冊或密碼錯誤");
    }
  }
);

interface AuthState {
  entities: [];
  loading: "idle" | "pending" | "succeeded" | "failed";
  status: string;
  error: any;
  login: boolean;
  email: string;
  pasword: string;
  name: string;
}

const initialState = {
  entities: [],
  loading: "idle",
  status: "",
  error: "",
  login: true,
  email: "",
  pasword: "",
  name: "",
} as AuthState;

export const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // login
      .addCase(login.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.login = true;
        state.email = action.payload.email;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    //
  },
});

export default counterSlice.reducer;
