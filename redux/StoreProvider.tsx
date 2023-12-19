// "use client";
// import { useRef } from "react";
// import { Provider } from "react-redux";
// import { makeStore, AppStore } from "../redux/store";
// import { increment } from "../redux/reducer/counterSlice";

// export default function StoreProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const storeRef = useRef<AppStore>();
//   if (!storeRef.current) {
//     // Create the store instance the first time this renders
//     storeRef.current = makeStore();
//     storeRef.current.dispatch(increment());
//   }

//   return <Provider store={storeRef.current}>{children}</Provider>;
// }
'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from './store';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
	const storeRef = useRef<AppStore>();
	if (!storeRef.current) {
		// Create the store instance the first time this renders
		storeRef.current = makeStore();
	}

	return <Provider store={storeRef.current}>{children}</Provider>;
}
