'use client';
import { useAppSelector } from '@/redux/hook';
import { useRouter } from 'next/navigation';

const AuthVerification = () => {
	const login = useAppSelector((state) => state.auth.login);
	const router = useRouter();
	// 加localstorage
	if (!login) {
		router.push('/');
		return false;
	}

	return true;
};
export default AuthVerification;
