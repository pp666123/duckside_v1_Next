import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const getFromLocalStorage = (key: string) => {
	if (!key || typeof window === 'undefined') {
		return '';
	}
	return localStorage.getItem(key);
};

interface loginDataType {
	email: string;
	password: string;
}

export const login = createAsyncThunk('auth/login', async (userData: loginDataType, thunkAPI) => {
	// 接API
	try {
		// const response = await AuthService.login(email, password);
		return userData;
	} catch (err) {
		return thunkAPI.rejectWithValue('帳號未註冊或密碼錯誤');
	}
});

interface firebaseLoginDataType {
	email: string;
}

export const firebaseLogin = createAsyncThunk(
	'auth/firebaseLogin',
	async (userData: firebaseLoginDataType, thunkAPI) => {
		try {
			return userData;
		} catch (error) {
			return thunkAPI.rejectWithValue('帳號未註冊或密碼錯誤');
		}
	},
);

export const logout = createAsyncThunk('auth/logout', async () => {});

interface AuthState {
	entities: [];
	loading: 'idle' | 'pending' | 'succeeded' | 'failed';
	error: any;
	login: boolean;
	email: string;
	pasword: string;
	name: string;
}

const initialState = {
	entities: [],
	loading: 'idle',
	error: '',
	login: getFromLocalStorage('user_email') ? true : false,
	email: '',
	pasword: '',
	name: '',
} as AuthState;

export const counterSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			// login
			.addCase(login.pending, (state, action) => {
				state.loading = 'pending';
			})
			.addCase(login.fulfilled, (state, action) => {
				state.loading = 'succeeded';
				state.login = true;
				localStorage.setItem('user_email', action.payload.email);
				state.email = action.payload.email;
			})
			.addCase(login.rejected, (state, action) => {
				state.loading = 'failed';
				state.error = action.error.message;
			})
			// firebaseLogin
			.addCase(firebaseLogin.pending, (state, action) => {
				state.loading = 'pending';
			})
			.addCase(firebaseLogin.fulfilled, (state, action) => {
				state.loading = 'succeeded';
				state.login = true;
				localStorage.setItem('user_email', action.payload.email);
				state.email = action.payload.email;
			})
			.addCase(firebaseLogin.rejected, (state, action) => {
				state.loading = 'failed';
				state.error = action.error.message;
			})
			// logout
			.addCase(logout.pending, (state, action) => {
				state.loading = 'pending';
			})
			.addCase(logout.fulfilled, (state, action) => {
				state.loading = 'succeeded';
				state.login = false;
				localStorage.removeItem('user_email');
				state.email = '';
			})
			.addCase(logout.rejected, (state, action) => {
				state.loading = 'failed';
				state.error = action.error.message;
			});
		//
	},
});

export default counterSlice.reducer;
