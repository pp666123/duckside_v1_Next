import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { useState } from 'react';
import EditModal from './ModalEdit';
import { deletPlan } from '../plantReducer';

const TableShow = () => {
	const colTitle = [
		{
			name: '日期',
			icon: <></>,
		},
		{
			name: '股票代號',
			icon: (
				<a href='#'>
					<svg
						className='w-3 h-3 ms-1.5'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 24 24'
					>
						<path d='M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z' />
					</svg>
				</a>
			),
		},
		{
			name: '類型',
			icon: (
				<a href='#'>
					<svg
						className='w-3 h-3 ms-1.5'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 24 24'
					>
						<path d='M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z' />
					</svg>
				</a>
			),
		},
		{
			name: '參考價',
			icon: (
				<a href='#'>
					<svg
						className='w-3 h-3 ms-1.5'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 24 24'
					>
						<path d='M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z' />
					</svg>
				</a>
			),
		},
		{
			name: '停損價',
			icon: (
				<a href='#'>
					<svg
						className='w-3 h-3 ms-1.5'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 24 24'
					>
						<path d='M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z' />
					</svg>
				</a>
			),
		},
		{
			name: '目標價',
			icon: (
				<a href='#'>
					<svg
						className='w-3 h-3 ms-1.5'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 24 24'
					>
						<path d='M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z' />
					</svg>
				</a>
			),
		},
		{
			name: '',
			icon: <></>,
		},

		// {
		//   name: "",
		//   icon: <></>,
		// },
	];
	const dispatch = useAppDispatch();
	const planDatas = useAppSelector((state) => state.plan.planData);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [clickId, setClickId] = useState<number>(0);
	return (
		<div className='relative overflow-x-auto shadow-md sm:rounded-lg mx-0 text-lg w-12/12 mt-5'>
			{modalIsOpen && (
				<EditModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} id={clickId} />
			)}
			<table className='w-full text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400'>
				<thead className='text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
					<tr>
						{colTitle.map((title, index) => {
							return (
								<th scope='col' className='px-6 py-3' key={`title-${index}`}>
									<div className='flex items-center'>
										{title.name}
										{/* {title.icon} */}
									</div>
								</th>
							);
						})}
					</tr>
				</thead>
				<tbody>
					{planDatas.map((planData, index) => {
						return (
							<tr
								className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
								key={`data-${index}`}
							>
								<th
									scope='row'
									className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
								>
									{planData.date}
								</th>
								<td className='px-6 py-4'>{planData.code}</td>
								<td className='px-6 py-4'>{planData.type}</td>
								<td className='px-6 py-4'>{planData.referencePrice}</td>
								<td className='px-6 py-4'>{planData.stopPrice}</td>
								<td className='px-6 py-4'>{planData.targetPrice}</td>

								<td className='px-6 py-4 text-right'>
									<a
										href='#'
										className='font-medium text-blue-600 dark:text-blue-500 hover:underline mr-3'
										onClick={() => {
											setClickId(index);
											setModalIsOpen(true);
										}}
									>
										編輯
									</a>
									<a
										href='#'
										className='font-medium text-red-600 dark:text-blue-500 hover:underline'
										onClick={() => {
											const upData = planDatas.filter((item) => item.id !== planData.id);
											dispatch(deletPlan(upData));
										}}
									>
										刪除
									</a>
								</td>
							</tr>
						);
					})}
					{planDatas.length === 0 && (
						<tr>
							<td className='text-center py-3' colSpan={7}>
								目前無資料
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default TableShow;
