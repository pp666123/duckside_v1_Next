import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface palnObject {
  date: string;
  code: string;
  type: "無" | "存股" | "短期" | "中期" | "長期";
  referencePrice: string;
  stopPrice: string;
  targetPrice: string;
  note?: string;
}

export const addPlan = createAsyncThunk(
  "plan/addPlan",
  async (planData: palnObject, thunkAPI) => {
    // 接API
    try {
      // const response = await AuthService.login(email, password);
      return planData;
    } catch (err) {
      return thunkAPI.rejectWithValue("新增錯誤");
    }
  }
);

interface PlantState {
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: any;
  planData: palnObject[];
}

const initialState = {
  loading: "idle",
  status: "",
  error: "",
  planData: [],
} as PlantState;

export const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // login
      .addCase(addPlan.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(addPlan.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.planData = [...state.planData, action.payload];
      })
      .addCase(addPlan.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
    //
  },
});

export default counterSlice.reducer;
