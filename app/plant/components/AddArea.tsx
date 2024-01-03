import { useForm, SubmitHandler, SubmitErrorHandler, Controller } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { plantSuccessModal, plantFailModal } from '../../components/ModalSweet';
import Input from './Input';
import { addPlan } from '../plantReducer';
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

			dispatch(addPlan(apiData)).then(() => {
				plantSuccessModal({ text: '新增' as const });

				reset();
			});
		})();
	}, [dispatch, handleSubmit, planData.length, reset]);

	const onError: SubmitErrorHandler<formData> = (errors, e) => {
		plantFailModal({ errors, text: '修改' as const });
		return;
	};

	return (
		<form className='2xl:w-5/12 w-12/12' onSubmit={handleSubmit(onSubmit, onError)}>
			<div className='flex flex-wrap text-lg'>
				{/*  */}
				<div className='sm:w-1/3 w-full pr-3 mb-2'>
					<div className='text-gray-700 font-bold'>日期</div>
					<input
						className='border-2 border-gray-500 rounded w-full p-1 cursor-pointer'
						type='date'
						{...register('date')}
					/>
				</div>
				{/*  */}
				<div className='sm:w-1/3 w-full pr-3 mb-2'>
					<div className='text-gray-700 font-bold'>股票代號</div>
					<Controller
						name='code'
						control={control}
						defaultValue={null as unknown as { value: string; label: string }}
						rules={{
							required: 'Code is required',
							validate: (value) => value.value !== '',
						}}
						render={({ field }) => <Input field={field} />}
					/>
				</div>
				{/*  */}
				<div className='sm:w-1/3 w-full pr-3 mb-2'>
					<div className='text-gray-700 font-bold'>類型</div>
					<select
						className='border-2 border-gray-500 rounded w-full p-1 h-[40px] cursor-pointer'
						{...register('type')}
					>
						<option>無</option>
						<option>存股</option>
						<option>短期</option>
						<option>中期</option>
						<option>長期</option>
					</select>
				</div>
				{/*  */}
				<div className='sm:w-1/3 w-full pr-3 mb-2'>
					<div className='text-gray-700 font-bold'>參考價</div>
					<input
						className='border-2 border-gray-500 rounded w-full p-1'
						type='text'
						{...register('referencePrice', { required: true, pattern: /^\d+$/ })}
					/>
				</div>
				{/*  */}
				<div className='sm:w-1/3 w-full pr-3 mb-2'>
					<div className='text-gray-700 font-bold'>停損價</div>
					<input
						className='border-2 border-gray-500 rounded w-full p-1'
						type='text'
						{...register('stopPrice', { pattern: /^\d+$/ })}
					/>
				</div>
				{/*  */}
				<div className='sm:w-1/3 w-full pr-3 mb-2'>
					<div className='text-gray-700 font-bold'>目標價</div>
					<input
						className='border-2 border-gray-500 rounded w-full p-1'
						type='text'
						{...register('targetPrice', { pattern: /^\d+$/ })}
					/>
				</div>
				{/*  */}
				<div className='w-1/3 pr-3 mb-2'>
					<button className='bg-[#2A6470] hover:bg-[#007f72] rounded py-2 text-xl text-white sm:w-1/3 w-full whitespace-nowrap font-bold'>
						新增
					</button>
				</div>
				{/*  */}
			</div>
		</form>
	);
}
