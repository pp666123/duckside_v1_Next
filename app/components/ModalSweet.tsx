import Swal from 'sweetalert2';
import { logout } from '../pageReducer';
import { deletPlan } from '../plant/plantReducer';
import {
	addAssetCash,
	addAssetFund,
	addAssetStock,
	reduceAssetCash,
	reduceAssetFund,
	reduceAssetStock,
} from '../asset/assetReducer';

export const loginFailModal = () => {
	Swal.fire({
		title: '登入失敗',
		icon: 'error',
		confirmButtonColor: '#2A6470',
		confirmButtonText: '好',
	});
};

export const logoutModal = (dispatch: any) => {
	Swal.fire({
		title: '要登出嗎?',
		icon: 'question',
		showCancelButton: true,
		confirmButtonColor: '#2A6470',
		confirmButtonText: '登出',
		cancelButtonColor: '#d33',
		cancelButtonText: '取消',
	}).then((result) => {
		if (result.isConfirmed) {
			dispatch(logout());
			Swal.fire({
				title: '已登出!',
				icon: 'success',
				confirmButtonColor: '#2A6470',
				confirmButtonText: '好',
			});
		}
	});
};

// plant
interface alertData {
	text: '新增' | '修改';
}

export const plantSuccessModal = ({ text }: alertData) => {
	Swal.fire({
		title: `${text}成功`,
		text: ``,
		icon: 'success',
		confirmButtonColor: '#2A6470',
		confirmButtonText: '好',
	});
};

export const plantFailModal = ({ errors }: any) => {
	Swal.fire({
		title: '新增失敗',
		html: `
      ${(errors.code?.type === 'required' && '股票代號為必填<br />') || ''}
      ${(errors.referencePrice?.type === 'required' && '參考價為必填<br />') || ''}
      ${(errors.referencePrice?.type === 'pattern' && '參考價只能是數字<br />') || ''}
      ${(errors.targetPrice?.type === 'pattern' && '目標價只能是數字<br />') || ''}
      ${(errors.stopPrice?.type === 'pattern' && '停損價只能是數字<br />') || ''}
    `,
		icon: 'error',
		confirmButtonColor: '#2A6470',
		confirmButtonText: '好',
	});
};

export const plantDeletModal = (dispatch: any, upData: any) => {
	Swal.fire({
		title: '要刪除嗎?',
		icon: 'question',
		showCancelButton: true,
		confirmButtonColor: '#2A6470',
		confirmButtonText: '刪除',
		cancelButtonColor: '#d33',
		cancelButtonText: '取消',
	}).then((result) => {
		if (result.isConfirmed) {
			dispatch(deletPlan(upData));
			Swal.fire({
				title: '已刪除!',
				icon: 'success',
				confirmButtonColor: '#2A6470',
				confirmButtonText: '好',
			});
		}
	});
};

// asset
interface AssetAddModal {
	title:
		| '要存入多少錢?'
		| '要領出多少錢?'
		| '要用多少錢買入股票?'
		| '要賣出多少錢的股票?'
		| '要用多少錢買入基金?'
		| '要賣出多少錢的基金?';
	dispatch: any;
	asset?: number;
	stock?: number;
	deposit?: number;
	fund?: number;
}

export const assetAddModal = ({ title, dispatch, asset, stock, deposit, fund }: AssetAddModal) => {
	Swal.fire({
		title: title,
		input: 'text',
		inputAttributes: {
			autocapitalize: 'off',
		},
		showCancelButton: true,
		confirmButtonColor: '#2A6470',
		confirmButtonText: '確定',
		cancelButtonColor: '#d33',
		cancelButtonText: '取消',

		showLoaderOnConfirm: true,
		preConfirm: async (money) => {
			try {
				switch (title) {
					case '要存入多少錢?':
						if (isNaN(Number(money))) {
							throw new Error('請輸入數字!');
						} else if (money < 0) {
							throw new Error('金額不得為負數!');
						} else if (money > 0) {
							dispatch(addAssetCash(money));
						}
						break;
					case '要領出多少錢?':
						if (isNaN(Number(money))) {
							throw new Error('請輸入數字!');
						} else if (money < 0) {
							throw new Error('金額不得為負數!');
						} else if (money > asset!) {
							throw new Error('餘額不足!');
						} else if (money <= asset!) {
							dispatch(reduceAssetCash(money));
						}
						break;
					case '要用多少錢買入股票?':
						if (isNaN(Number(money))) {
							throw new Error('請輸入數字!');
						} else if (money < 0) {
							throw new Error('金額不得為負數!');
						} else if (money > deposit!) {
							throw new Error('餘額不足!');
						} else if (money <= deposit!) {
							dispatch(addAssetStock(money));
						}
						break;
					case '要賣出多少錢的股票?':
						if (isNaN(Number(money))) {
							throw new Error('請輸入數字!');
						} else if (money < 0) {
							throw new Error('金額不得為負數!');
						} else if (money > stock!) {
							throw new Error('餘額不足!');
						} else if (money <= stock!) {
							dispatch(reduceAssetStock(money));
						}
						break;
					case '要用多少錢買入基金?':
						if (isNaN(Number(money))) {
							throw new Error('請輸入數字!');
						} else if (money < 0) {
							throw new Error('金額不得為負數!');
						} else if (money > deposit!) {
							throw new Error('餘額不足!');
						} else if (money <= deposit!) {
							dispatch(addAssetFund(money));
						}
						break;

					case '要賣出多少錢的基金?':
						if (isNaN(Number(money))) {
							throw new Error('請輸入數字!');
						} else if (money < 0) {
							throw new Error('金額不得為負數!');
						} else if (money > fund!) {
							throw new Error('餘額不足!');
						} else if (money <= fund!) {
							dispatch(reduceAssetFund(money));
						}
						break;
					default:
						break;
				}
			} catch (error) {
				Swal.showValidationMessage(`
				${error}
			  `);
			}
		},
		allowOutsideClick: () => !Swal.isLoading(),
	}).then((result) => {
		if (result.isConfirmed) {
			Swal.fire({
				title: `完成`,
				confirmButtonColor: '#2A6470',
				confirmButtonText: 'Ok',
			});
		}
	});
};
