'use client';

import Add from './components/Add';

export default function Asset() {
	// const email = useAppSelector((state) => state.auth.email);
	// const dispatch = useAppDispatch();
	return (
		<>
			<div className='text-4xl text-center'>資產明細</div>
			<hr className='my-6' />
			<div className='flex flex-col justify-center'>
				<Add />
				{/* <TableShow /> */}
			</div>
		</>
	);
}
