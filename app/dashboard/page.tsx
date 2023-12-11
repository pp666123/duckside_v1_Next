"use client";
import Image from "next/image";
import { useAppSelector, useAppDispatch, useAppStore } from "../../redux/hook";
import { login } from "../pageReducer";

export default function Home() {
  const email = useAppSelector((state) => state.counter.email);
  const dispatch = useAppDispatch();
  return (
    <>
      <div>{email}</div>
      <button
        onClick={() =>
          dispatch(login({ email: "123", password: "3434", name: "55" }))
        }
      >
        ++++
      </button>
    </>
  );
}
