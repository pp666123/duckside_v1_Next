'use client';

import { useAppSelector } from '@/redux/hook';
import AddArea from './components/AddArea';
import PieChart from './components/PieChart';
import { useEffect } from 'react';

export default function Asset() {
	const stock = useAppSelector((state) => state.asset.stock);
	const fund = useAppSelector((state) => state.asset.fund);
	const deposit = useAppSelector((state) => state.asset.deposit);

	const data = [
		{ name: '股票', value: stock },
		{ name: '基金', value: fund },
		{ name: '存款', value: deposit },
	].filter((item) => item.value > 0);

	return (
		<>
			<div className='text-4xl text-center'>資產明細</div>
			<hr className='my-6' />
			<div className='flex flex-col justify-center text-gray-700 font-bold p-2'>
				<AddArea />
			</div>
			<div className='flex flex-col items-center text-gray-700 font-bold p-2'>
				<PieChart data={data} />
			</div>
		</>
	);
}
