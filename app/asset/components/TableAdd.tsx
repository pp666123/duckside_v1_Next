import { useForm, SubmitHandler, SubmitErrorHandler, Controller } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { plantSuccessModal, plantFailModal } from '../../components/ModalSweet';
// import Input from './Input';
// import { addPlan } from '../assetReducer';
import { useCallback } from 'react';

interface formData {
	date: string;
	code: {
		value: string;
		label: string;
	};
	type: '無' | '存股' | '短期' | '中期' | '長期';
	referencePrice: number;
	stopPrice: number;
	targetPrice: number;
	note?: string;
}

export default function TableAdd() {
	const dispatch = useAppDispatch();
	const planData = useAppSelector((state) => state.plan.planData);

	const { register, handleSubmit, reset, control, setValue } = useForm<formData>();

	const onSubmit = useCallback(async () => {
		handleSubmit((data) => {
			const apiData = {
				id: planData.length,
				date: data.date,
				code: data.code.label,
				type: data.type,
				referencePrice: data.referencePrice,
				stopPrice: data.stopPrice,
				targetPrice: data.targetPrice,
			};

			// dispatch(addPlan(apiData)).then(() => {
			// 	plantSuccessModal({ text: '新增' as const });

			// 	reset();
			// });
		})();
	}, [dispatch, handleSubmit, planData.length, reset]);

	const onError: SubmitErrorHandler<formData> = (errors, e) => {
		plantFailModal({ errors, text: '修改' as const });
		return;
	};

	return (
		<form
			className='flex flex-wrap text-lg text-gray-700 font-bold'
			onSubmit={handleSubmit(onSubmit, onError)}
		>
			<div className='flex w-6/12'>
				<div className='flex justify-between items-center w-10/12'>
					<div className='w-6/12'>資產：12345678912</div>
					<div className='flex justify-between w-6/12'>
						<button className='bg-[#2A6470] hover:bg-[#007f72] rounded py-2 text-xl text-white whitespace-nowrap font-bold w-5/12'>
							存錢
						</button>
						<button className='bg-[#DD3333] hover:bg-[#C12C2C] rounded py-1 text-xl text-white whitespace-nowrap font-bold w-5/12'>
							領錢
						</button>
					</div>
				</div>
			</div>
			<div className='flex w-6/12'></div>
			<div className='flex w-6/12'>↓</div>
			<div className='flex w-6/12'></div>
			<div className='flex w-6/12'>
				<div className='flex justify-between items-center w-10/12'>
					<div className='w-6/12'>股市：12345678912</div>
					<div className='flex justify-between w-6/12'>
						<button className='bg-[#2A6470] hover:bg-[#007f72] rounded py-2 text-xl text-white whitespace-nowrap font-bold w-5/12'>
							買入
						</button>
						<button className='bg-[#DD3333] hover:bg-[#C12C2C] rounded py-2 text-xl text-white whitespace-nowrap font-bold w-5/12'>
							賣出
						</button>
					</div>
				</div>
			</div>
			<div className='flex w-6/12'>
				<div className='flex justify-between items-center w-10/12'>
					<div className='w-6/12'>基金：12345678912</div>
					<div className='flex justify-between w-6/12'>
						<button className='bg-[#2A6470] hover:bg-[#007f72] rounded py-2 text-xl text-white whitespace-nowrap font-bold w-5/12'>
							買入
						</button>
						<button className='bg-[#DD3333] hover:bg-[#C12C2C] rounded py-2 text-xl text-white whitespace-nowrap font-bold w-5/12'>
							賣出
						</button>
					</div>
				</div>
			</div>
			<div className='flex w-full'>　</div>
			<div className='flex w-6/12'>
				<div className='flex justify-between items-center w-10/12'>
					<div className='w-6/12'>存款：12345678912</div>
				</div>
			</div>
		</form>
	);
}
