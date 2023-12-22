import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';

export default function firebaseLogout() {
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

	signOut(auth);
}
