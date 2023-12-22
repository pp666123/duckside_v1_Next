'use client';
import { useAppDispatch } from '@/redux/hook';
import FirebaseLogin from '../utils/firebaseLog';
import { loginFailModal } from './ModalSweet';
import { firebaseLogin } from '../pageReducer';

export default function FirebaseGoogleLogin() {
	const dispatch = useAppDispatch();
	// loginFailModal();
	// const data = { email: user.email || '' };
	// dispatch(firebaseLogin(data));
	FirebaseLogin().then((res) => {
		!res.success && loginFailModal();
		const email = { email: res.email || '' };
		res.success && email && dispatch(firebaseLogin(email));
	});
	return <>123</>;
}
