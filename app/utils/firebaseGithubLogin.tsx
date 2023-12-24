import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, deleteUser, signOut, GithubAuthProvider } from 'firebase/auth';

export default function firebaseFbLogin() {
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

	const providerGithub = new GithubAuthProvider();

	return signInWithPopup(auth, providerGithub)
		.then((result) => {
			const credential = GithubAuthProvider.credentialFromResult(result);
			const token = credential?.accessToken;
			const user = result.user;
			return { success: true, email: user.email };
		})
		.catch((error) => {
			return { success: false, email: null };
			console.error('Authentication Error:', error);
			const errorCode = error.code;
			const errorMessage = error.message;
			const email = error.email;
			const credential = GithubAuthProvider.credentialFromError(error);
		});
}
