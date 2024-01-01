'use client';

import TableAdd from './components/TableAdd';

export default function Asset() {
	// const email = useAppSelector((state) => state.auth.email);
	// const dispatch = useAppDispatch();
	return (
		<>
			<div className='text-4xl text-center'>資產明細</div>
			<hr className='my-6' />
			<div className='flex flex-col justify-center'>
				<TableAdd />
				{/* <TableShow /> */}
			</div>
		</>
	);
}
