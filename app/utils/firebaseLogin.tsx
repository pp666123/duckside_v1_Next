import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export default function firebaseLogin() {
	// const dispatch = useAppDispatch();

	const firebaseConfig = {
		apiKey: process.env.NEXT_PUBLIC_APIKEY,
		authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
		projectId: process.env.NEXT_PUBLIC_PROJECTID,
		storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
		messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
		appId: process.env.NEXT_PUBLIC_APPID,
	};

	const app = initializeApp(firebaseConfig);
	const auth = getAuth();
	const providerGoogle = new GoogleAuthProvider();

	return signInWithPopup(auth, providerGoogle)
		.then((result) => {
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const user = result.user;
			return { success: true, email: user.email };
		})
		.catch((error) => {
			return { success: false, email: null };
			const errorCode = error.code;
			const errorMessage = error.message;
			const email = error.email;
			const credential = GoogleAuthProvider.credentialFromError(error);
		});
}
