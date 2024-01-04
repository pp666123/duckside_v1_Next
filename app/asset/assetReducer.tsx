import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const addAssetCash = createAsyncThunk(
	'asset/addAssetCash',
	async (money: number, thunkAPI) => {
		// 接API
		try {
			return money;
		} catch (err) {
			return thunkAPI.rejectWithValue('新增錯誤');
		}
	},
);

export const reduceAssetCash = createAsyncThunk(
	'asset/reduceAssetCash',
	async (money: number, thunkAPI) => {
		// 接API
		try {
			return money;
		} catch (err) {
			return thunkAPI.rejectWithValue('新增錯誤');
		}
	},
);

export const addAssetStock = createAsyncThunk(
	'asset/addAssetStock',
	async (money: number, thunkAPI) => {
		// 接API
		try {
			return money;
		} catch (err) {
			return thunkAPI.rejectWithValue('新增錯誤');
		}
	},
);

export const reduceAssetStock = createAsyncThunk(
	'asset/reduceAssetStock',
	async (money: number, thunkAPI) => {
		// 接API
		try {
			return money;
		} catch (err) {
			return thunkAPI.rejectWithValue('新增錯誤');
		}
	},
);

export const addAssetFund = createAsyncThunk(
	'asset/addAssetFund',
	async (money: number, thunkAPI) => {
		// 接API
		try {
			return money;
		} catch (err) {
			return thunkAPI.rejectWithValue('新增錯誤');
		}
	},
);

export const reduceAssetFund = createAsyncThunk(
	'asset/reduceAssetFund',
	async (money: number, thunkAPI) => {
		// 接API
		try {
			return money;
		} catch (err) {
			return thunkAPI.rejectWithValue('新增錯誤');
		}
	},
);

interface AssetState {
	loading: 'idle' | 'pending' | 'succeeded' | 'failed';
	error: any;
	asset: number;
	stock: number;
	fund: number;
	deposit: number;
}

const initialState = {
	loading: 'idle',
	error: '',
	asset: 1000000,
	stock: 0,
	fund: 0,
	deposit: 1000000,
} as AssetState;

export const counterSlice = createSlice({
	name: 'asset',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			// addAssetCash
			.addCase(addAssetCash.pending, (state, action) => {
				state.loading = 'pending';
			})
			.addCase(addAssetCash.fulfilled, (state, action) => {
				state.loading = 'succeeded';
				state.asset = Number(state.asset) + Number(action.payload);
				state.deposit = Number(state.deposit) + Number(action.payload);
			})
			.addCase(addAssetCash.rejected, (state, action) => {
				state.loading = 'failed';
				state.error = action.error.message;
			})
			// reduceAssetCash
			.addCase(reduceAssetCash.pending, (state, action) => {
				state.loading = 'pending';
			})
			.addCase(reduceAssetCash.fulfilled, (state, action) => {
				state.loading = 'succeeded';
				state.asset = Number(state.asset) - Number(action.payload);
				state.deposit = Number(state.deposit) - Number(action.payload);
			})
			.addCase(reduceAssetCash.rejected, (state, action) => {
				state.loading = 'failed';
				state.error = action.error.message;
			})
			// addAssetStock
			.addCase(addAssetStock.pending, (state, action) => {
				state.loading = 'pending';
			})
			.addCase(addAssetStock.fulfilled, (state, action) => {
				state.loading = 'succeeded';
				state.stock = Number(state.stock) + Number(action.payload);
				state.deposit = Number(state.deposit) - Number(action.payload);
			})
			.addCase(addAssetStock.rejected, (state, action) => {
				state.loading = 'failed';
				state.error = action.error.message;
			})
			// reduceAssetStock
			.addCase(reduceAssetStock.pending, (state, action) => {
				state.loading = 'pending';
			})
			.addCase(reduceAssetStock.fulfilled, (state, action) => {
				state.loading = 'succeeded';
				state.stock = Number(state.stock) - Number(action.payload);
				state.deposit = Number(state.deposit) + Number(action.payload);
			})
			.addCase(reduceAssetStock.rejected, (state, action) => {
				state.loading = 'failed';
				state.error = action.error.message;
			})
			// addAssetFund
			.addCase(addAssetFund.pending, (state, action) => {
				state.loading = 'pending';
			})
			.addCase(addAssetFund.fulfilled, (state, action) => {
				state.loading = 'succeeded';
				state.fund = Number(state.fund) + Number(action.payload);
				state.deposit = Number(state.deposit) - Number(action.payload);
			})
			.addCase(addAssetFund.rejected, (state, action) => {
				state.loading = 'failed';
				state.error = action.error.message;
			})
			// reduceAssetFund
			.addCase(reduceAssetFund.pending, (state, action) => {
				state.loading = 'pending';
			})
			.addCase(reduceAssetFund.fulfilled, (state, action) => {
				state.loading = 'succeeded';
				state.fund = Number(state.fund) - Number(action.payload);
				state.deposit = Number(state.deposit) + Number(action.payload);
			})
			.addCase(reduceAssetFund.rejected, (state, action) => {
				state.loading = 'failed';
				state.error = action.error.message;
			});
	},
});

export default counterSlice.reducer;
