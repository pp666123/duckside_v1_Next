'use client';
import { useAppSelector } from '@/redux/hook';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function AuthVerification() {
	const login = useAppSelector((state) => state.auth.login);
	const router = useRouter();

	useEffect(() => {
		if (!login) {
			router.push('/');
		}
	});

	return <></>;
}

export function AuthVerificationFuntion(href: any) {
	const login = useAppSelector((state) => state.auth.login);
	if (!login) {
		return '/';
	} else {
		return href;
	}
}
