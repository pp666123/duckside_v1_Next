import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface palnObject {
  id: number;
  date: string;
  code: string;
  type: "無" | "存股" | "短期" | "中期" | "長期";
  referencePrice: number;
  stopPrice: number;
  targetPrice: number;
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

export const editPlan = createAsyncThunk(
  "plan/editPlan",
  async (planData: any, thunkAPI) => {
    // 接API
    try {
      // const response = await AuthService.login(email, password);
      return planData;
    } catch (err) {
      return thunkAPI.rejectWithValue("修改錯誤");
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
  name: "plan",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // addPlan
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
      })
      // editPlan
      .addCase(editPlan.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(editPlan.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.planData = action.payload;
      })
      .addCase(editPlan.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

export default counterSlice.reducer;
