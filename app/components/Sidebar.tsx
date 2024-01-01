'use client';
import Image from 'next/image';
import { useState } from 'react';
import {
	ClipboardDocumentListIcon,
	DocumentMagnifyingGlassIcon,
	BanknotesIcon,
	CalculatorIcon,
	ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { AuthVerificationFuntion } from '../utils/AuthVerify';
import { logoutModal } from './ModalSweet';
import { useAppDispatch, useAppSelector } from '@/redux/hook';

export default function Sidebar() {
	const [show, setShow] = useState(false);
	const showToggleHandler = () => setShow(!show);
	const dispatch = useAppDispatch();
	const login = useAppSelector((state) => state.auth.login);

	const listItem = [
		{
			name: '資產明細',
			href: 'asset',
			icon: <BanknotesIcon className='w-[24px] h-[24px] transition duration-75 text-[#2a6470]' />,

			click: () => setShow(false),
		},
		{
			name: '我的計畫',
			href: 'plant',
			icon: (
				<ClipboardDocumentListIcon className='w-[24px] h-[24px] transition duration-75 text-[#2a6470]' />
			),

			click: () => setShow(false),
		},

		{
			name: '交易紀錄',
			href: 'history',
			icon: <CalculatorIcon className='w-[24px] h-[24px] transition duration-75 text-[#2a6470]' />,

			click: () => setShow(false),
		},
		{
			name: '投資成果',
			href: 'achievement',
			icon: (
				<DocumentMagnifyingGlassIcon className='w-[24px] h-[24px] transition duration-75 text-[#2a6470]' />
			),

			click: () => setShow(false),
		},
		// {
		//   name: "",
		//   href: "#",
		//   icon: <></>,
		//   note: <></>,
		// },
	];

	return (
		<>
			{/* HEADSHOT */}
			<nav className='fixed top-0 z-50 w-full border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
				<div className='px-3 py-3 lg:px-5 lg:pl-3 bg-[#E5CC4D] shadow-lg'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center justify-start rtl:justify-end'>
							<button
								data-drawer-target='logo-sidebar'
								data-drawer-toggle='logo-sidebar'
								aria-controls='logo-sidebar'
								type='button'
								className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
								onClick={showToggleHandler}
							>
								<span className='sr-only'>Open sidebar</span>
								<svg
									className='w-6 h-6'
									aria-hidden='true'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										clipRule='evenodd'
										fillRule='evenodd'
										d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
									></path>
								</svg>
							</button>
							<Link href='/' className='flex items-center ms-2 md:me-24'>
								<Image
									src='/duckLogo.png'
									alt='Duck Logo'
									className=' me-3'
									width={200}
									height={100}
									priority
								/>
							</Link>
						</div>
						<div className='flex items-center'>
							<div className='flex items-center ms-3'>
								<div>
									<button
										type='button'
										className='flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
										aria-expanded='false'
										data-dropdown-toggle='dropdown-user'
									>
										<span className='sr-only'>Open user menu</span>

										<Image
											src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
											alt='Vercel Logo'
											className='w-8 h-8 rounded-full'
											width={100}
											height={24}
											priority
										/>
									</button>
								</div>
								<div
									className='z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600'
									id='dropdown-user'
								>
									<div className='px-4 py-3' role='none'>
										<p className='text-sm text-gray-900 dark:text-white' role='none'>
											Neil Sims
										</p>
										<p
											className='text-sm font-medium text-gray-900 truncate dark:text-gray-300'
											role='none'
										>
											neil.sims@flowbite.com
										</p>
									</div>
									<ul className='py-1' role='none'>
										<li>
											<a
												href='#'
												className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
												role='menuitem'
											>
												Dashboard
											</a>
										</li>
										<li>
											<a
												href='#'
												className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
												role='menuitem'
											>
												Settings
											</a>
										</li>
										<li>
											<a
												href='#'
												className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
												role='menuitem'
											>
												Earnings
											</a>
										</li>
										<li>
											<a
												href='#'
												className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
												role='menuitem'
											>
												Sign out
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
			{/* SIDEBAR */}
			<aside
				id='logo-sidebar'
				className={`absolute lg:relative top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform text-xl ${
					show ? '' : '-translate-x-full'
				} border-r border-gray-200 lg:translate-x-0 dark:bg-gray-800 dark:border-gray-700 bg-[#ecdfb1]`}
				aria-label='Sidebar'
			>
				<div className='h-full px-3 pb-4 overflow-y-auto  dark:bg-gray-800'>
					<ul className='space-y-2 font-medium'>
						{listItem.map((item, index) => {
							return (
								<li key={index}>
									<Link
										href={AuthVerificationFuntion(item.href)}
										className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#2a6470] hover:bg-opacity-25 dark:hover:bg-gray-700 group ${
											index === 0 || index === 4 || index === 1 ? '' : 'cursor-not-allowed'
										}`}
										onClick={item.click}
									>
										{item.icon}
										<span className='flex-1 ms-3 whitespace-nowrap'>{item.name}</span>
									</Link>
								</li>
							);
						})}
						{login && (
							<li>
								<Link
									href='/'
									className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#2a6470] hover:bg-opacity-25 dark:hover:bg-gray-700 group'
									onClick={() => {
										logoutModal(dispatch);
										setShow(false);
									}}
								>
									<ArrowLeftOnRectangleIcon className='w-[24px] h-[24px] transition duration-75 text-[#2a6470]' />

									<span className='flex-1 ms-3 whitespace-nowrap'>登　　出</span>
								</Link>
							</li>
						)}
					</ul>
				</div>
			</aside>
			{show && (
				<div
					className={`fixed top-0 left-[250px] z-40 w-[100%] lg:hidden h-screen pt-20 bg-slate-100 opacity-75 `}
				/>
			)}
		</>
	);
}
