"use client";
import Image from "next/image";
import { useAppSelector, useAppDispatch, useAppStore } from "../../redux/hook";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../redux/reducer/counterSlice";

export default function Home() {
  const name = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <>
      <div>{name}</div>
      <button onClick={() => dispatch(increment())}>++++</button>
    </>
  );
}
