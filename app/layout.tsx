import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SideBar from './components/Sidebar';
import StoreProvider from '../redux/StoreProvider';
import { AuthVerification } from './utils/AuthVerify';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'duckside投資理財',
	description: '以鴨子為主題串接投資記帳、模擬投資小遊戲和裝扮遊戲的專題',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<StoreProvider>
			<AuthVerification />
			<html lang='en'>
				<body className={`${inter.className} flex`}>
					<SideBar />
					<main className='flex min-h-screen flex-col items-center justify-between py-24 px-6 w-[100%]'>
						<div className='flex flex-col bg-white p-5 shadow-lg rounded w-[100%]'>
							{children}
							<div className='flex justify-center mt-5'>Copyright © Duckside 2023.</div>
						</div>
					</main>
				</body>
			</html>
		</StoreProvider>
	);
}
