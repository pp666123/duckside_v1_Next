'use client';
import Table from './components/Table';
import AddArea from './components/AddArea';

export default function Plant() {
	return (
		<>
			<div className='text-4xl text-center'>我的計畫</div>
			<hr className='my-6' />
			<div className='flex flex-col justify-center text-gray-700 font-bold p-2'>
				<AddArea />
				<Table />
			</div>
		</>
	);
}
