import { useDispatch } from 'react-redux';
import { assetAddModal } from '../../components/ModalSweet';
import { addAssetCash } from '../assetReducer';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '@/redux/hook';

export default function TableAdd() {
	const dispatch = useAppDispatch();
	const asset = useAppSelector((state) => state.asset.asset);
	const stock = useAppSelector((state) => state.asset.stock);
	const fund = useAppSelector((state) => state.asset.fund);
	const deposit = useAppSelector((state) => state.asset.deposit);

	return (
		<div className='flex flex-wrap text-lg text-gray-700 font-bold'>
			<div className='flex sm:w-6/12 w-full'>
				<div className='flex justify-between items-center w-10/12'>
					<div className='w-6/12'>資產：{asset}</div>
					<div className='flex justify-between w-6/12'>
						<button
							className='bg-[#2A6470] hover:bg-[#007f72] rounded py-2 text-xl text-white whitespace-nowrap font-bold w-5/12'
							onClick={() => assetAddModal({ title: '要存入多少錢?', dispatch: dispatch })}
						>
							存錢
						</button>
						<button
							className='bg-[#DD3333] hover:bg-[#C12C2C] rounded py-1 text-xl text-white whitespace-nowrap font-bold w-5/12'
							onClick={() =>
								assetAddModal({ title: '要領出多少錢?', dispatch: dispatch, asset: asset })
							}
						>
							領錢
						</button>
					</div>
				</div>
			</div>
			<div className='decorate flex w-6/12 sm:block hidden'></div>
			<div className='flex sm:w-6/12 w-full'>↓</div>
			<div className='decorate flex sm:w-6/12 sm:block hidden'></div>
			<div className='flex sm:w-6/12 w-full'>
				<div className='flex justify-between items-center w-10/12'>
					<div className='w-6/12'>股市：{stock}</div>
					<div className='flex justify-between w-6/12'>
						<button
							className='bg-[#2A6470] hover:bg-[#007f72] rounded py-2 text-xl text-white whitespace-nowrap font-bold w-5/12'
							onClick={() =>
								assetAddModal({
									title: '要用多少錢買入股票?',
									dispatch: dispatch,
									deposit: deposit,
								})
							}
						>
							買入
						</button>
						<button
							className='bg-[#DD3333] hover:bg-[#C12C2C] rounded py-2 text-xl text-white whitespace-nowrap font-bold w-5/12'
							onClick={() =>
								assetAddModal({ title: '要賣出多少錢的股票?', dispatch: dispatch, stock: stock })
							}
						>
							賣出
						</button>
					</div>
				</div>
			</div>
			<div className='decorate w-full sm:hidden block'>　</div>
			<div className='flex sm:w-6/12 w-full'>
				<div className='flex justify-between items-center w-10/12'>
					<div className='w-6/12'>基金：{fund}</div>
					<div className='flex justify-between w-6/12'>
						<button
							className='bg-[#2A6470] hover:bg-[#007f72] rounded py-2 text-xl text-white whitespace-nowrap font-bold w-5/12'
							onClick={() =>
								assetAddModal({
									title: '要用多少錢買入基金?',
									dispatch: dispatch,
									deposit: deposit,
								})
							}
						>
							買入
						</button>
						<button
							className='bg-[#DD3333] hover:bg-[#C12C2C] rounded py-2 text-xl text-white whitespace-nowrap font-bold w-5/12'
							onClick={() =>
								assetAddModal({ title: '要賣出多少錢的基金?', dispatch: dispatch, fund: fund })
							}
						>
							賣出
						</button>
					</div>
				</div>
			</div>
			<div className='decorate flex w-full'>　</div>
			<div className='flex sm:w-6/12 w-full'>
				<div className='flex justify-between items-center w-10/12'>
					<div className='w-6/12'>存款：{deposit}</div>
				</div>
			</div>
		</div>
	);
}
