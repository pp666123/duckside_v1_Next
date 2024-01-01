import Swal from 'sweetalert2';
import { logout } from '../pageReducer';
import { deletPlan } from '../plant/plantReducer';

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
export const assetAddModal = () => {
	Swal.fire({
		title: 'Submit your Github username',
		input: 'text',
		inputAttributes: {
			autocapitalize: 'off',
		},
		showCancelButton: true,
		confirmButtonText: 'Look up',
		showLoaderOnConfirm: true,
		preConfirm: async (login) => {
			try {
				const githubUrl = `
			  https://api.github.com/users/${login}
			`;
				const response = await fetch(githubUrl);
				if (!response.ok) {
					return Swal.showValidationMessage(`
				${JSON.stringify(await response.json())}
			  `);
				}
				return response.json();
			} catch (error) {
				Swal.showValidationMessage(`
			  Request failed: ${error}
			`);
			}
		},
		allowOutsideClick: () => !Swal.isLoading(),
	}).then((result) => {
		if (result.isConfirmed) {
			Swal.fire({
				title: `${result.value.login}'s avatar`,
				imageUrl: result.value.avatar_url,
			});
		}
	});
};
