import Swal from 'sweetalert2';

interface alertData {
	text: '新增' | '修改';
}

export const successAlertModal = ({ text }: alertData) => {
	Swal.fire({
		title: `${text}成功`,
		text: ``,
		icon: 'success',
		confirmButtonColor: '#2A6470',
		confirmButtonText: '好',
	});
};

export const failAlertModal = ({ errors }: any) => {
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
