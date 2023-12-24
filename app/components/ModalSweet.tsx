import Swal from 'sweetalert2';
import { logout } from '../pageReducer';

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

export const plantFailModal = ({ errors, text }: any) => {
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

export const plantDeletModal = (dispatch: any, planDatas: any) => {
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
			// dispatch(logout());
			Swal.fire({
				title: '已刪除!',
				icon: 'success',
				confirmButtonColor: '#2A6470',
				confirmButtonText: '好',
			});
		}
	});
};

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
