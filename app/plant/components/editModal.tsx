import Modal from "react-modal";
import React, { useCallback } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

interface editModalData {
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
}

export default function EditModal({
  modalIsOpen,
  setModalIsOpen,
  id,
}: editModalData) {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  type LoginData = {
    email: string;
    password: string;
  };

  const onSubmitHandler = useCallback(async () => {
    handleSubmit((data) => {
      const apiData: LoginData = {
        email: data.email,
        password: data.password,
      };

      reset();
      setModalIsOpen(false);
    })();
  }, []);

  const planData = useAppSelector((state) => state.plan.planData)[id];

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        className="top-[50%] left-[50%] right-auto bottom-auto mr-[-50%] p-0 absolute translate-x-[-50%] translate-y-[-50%] border-0 bg-white shadow rounded outline-none"
        contentLabel="editModal"
      >
        <form className="p-5 " onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="flex flex-col text-lg">
            {/*  */}
            <div className="pr-3 mb-2 flex items-center">
              <div className="text-gray-700 font-bold whitespace-nowrap">
                日　期：{planData.date}
              </div>
            </div>
            {/*  */}
            <div className="pr-3 mb-2 flex items-center">
              <div className="text-gray-700 font-bold whitespace-nowrap">
                股票代號：{planData.code}
              </div>
            </div>
            {/*  */}
            <div className="pr-3 mb-2 flex items-center">
              <div className="text-gray-700 font-bold whitespace-nowrap">
                類　型：
              </div>
              <select
                className="border-2 border-gray-500 rounded w-full p-1 h-[40px] cursor-pointer"
                {...register("type")}
                defaultValue={planData.type}
              >
                <option>無</option>
                <option>存股</option>
                <option>短期</option>
                <option>中期</option>
                <option>長期</option>
              </select>
            </div>
            {/*  */}
            <div className="pr-3 mb-2 flex items-center">
              <div className="text-gray-700 font-bold whitespace-nowrap">
                參考價：
              </div>
              <input
                className="border-2 border-gray-500 rounded w-full p-1"
                type="text"
                defaultValue={planData.referencePrice}
                {...register("referencePrice", { required: true })}
              />
            </div>
            {/*  */}
            <div className="pr-3 mb-2 flex items-center">
              <div className="text-gray-700 font-bold whitespace-nowrap">
                停損價：
              </div>
              <input
                className="border-2 border-gray-500 rounded w-full p-1"
                type="text"
                defaultValue={planData.stopPrice}
                {...register("stopPrice")}
              />
            </div>
            {/*  */}
            <div className="pr-3 mb-2 flex items-center">
              <div className="text-gray-700 font-bold whitespace-nowrap">
                目標價：
              </div>
              <input
                className="border-2 border-gray-500 rounded w-full p-1"
                type="text"
                defaultValue={planData.targetPrice}
                {...register("targetPrice")}
              />
            </div>
            {/*  */}
            <div className="w-full pr-3 mb-2 flex justify-end">
              <button
                className="bg-[#dc2626] hover:bg-[#ef4444] rounded py-2 text-xl text-white whitespace-nowrap font-bold px-4 mr-2"
                onClick={() => setModalIsOpen(false)}
              >
                關閉
              </button>
              <button className="bg-[#2A6470] hover:bg-[#007f72] rounded py-2 text-xl text-white whitespace-nowrap font-bold px-4">
                修改
              </button>
            </div>
            {/*  */}
          </div>
        </form>
      </Modal>
    </div>
  );
}
