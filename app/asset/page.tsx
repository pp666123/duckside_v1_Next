'use client';

import AddArea from './components/AddArea';

export default function Asset() {
	return (
		<>
			<div className='text-4xl text-center'>資產明細</div>
			<hr className='my-6' />
			<div className='flex flex-col justify-center text-gray-700 font-bold p-2'>
				<AddArea />
				{/* <TableShow /> */}
			</div>
		</>
	);
}
