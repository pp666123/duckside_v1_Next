'use client';

import { useAppSelector } from '@/redux/hook';
import AddArea from './components/AddArea';
import PieChart from './components/PieChart';
import { useEffect } from 'react';

export default function Asset() {
	const asset = useAppSelector((state) => state.asset.asset);
	const stock = useAppSelector((state) => state.asset.stock);
	const fund = useAppSelector((state) => state.asset.fund);
	const deposit = useAppSelector((state) => state.asset.deposit);

	const data = [
		{ name: 'asset', value: asset },
		{ name: 'stock', value: stock },
		{ name: 'fund', value: fund },
	].filter((item) => item.value > 0);

	return (
		<>
			<div className='text-4xl text-center'>資產明細</div>
			<hr className='my-6' />
			<div className='flex flex-col justify-center text-gray-700 font-bold p-2'>
				<AddArea />
			</div>
			<div>
				<PieChart data={data} />
			</div>
		</>
	);
}
