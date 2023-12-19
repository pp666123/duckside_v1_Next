'use client';
import TableShow from './components/TableShow';
import TableAdd from './components/TableAdd';

export default function Plant() {
	return (
		<>
			<div className='text-4xl text-center'>我的計畫</div>
			<hr className='my-6' />
			<div className='flex flex-col justify-center'>
				<TableAdd />
				<TableShow />
			</div>
		</>
	);
}
