import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const addAssetCash = createAsyncThunk(
	'asset/addAssetCash',
	async (assetCash: number, thunkAPI) => {
		// 接API
		try {
			return assetCash;
		} catch (err) {
			return thunkAPI.rejectWithValue('新增錯誤');
		}
	},
);

interface AssetState {
	loading: 'idle' | 'pending' | 'succeeded' | 'failed';
	error: any;
	cash: number;
}

const initialState = {
	loading: 'idle',
	error: '',
	cash: 0,
} as AssetState;

export const counterSlice = createSlice({
	name: 'asset',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			// addPlan
			.addCase(addAssetCash.pending, (state, action) => {
				state.loading = 'pending';
			})
			.addCase(addAssetCash.fulfilled, (state, action) => {
				state.loading = 'succeeded';
				state.cash = state.cash + action.payload;
			})
			.addCase(addAssetCash.rejected, (state, action) => {
				state.loading = 'failed';
				state.error = action.error.message;
			});
	},
});

export default counterSlice.reducer;
