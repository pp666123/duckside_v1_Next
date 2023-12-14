"use client";

import Table from "./Table";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { successAlertModal, failAlertModal } from "./AlertModal";
import { useAppDispatch } from "@/redux/hook";
import { addPlan } from "./plantReducer";

interface formData {
  date: string;
  code: string;
  type: "請選擇" | "存股" | "短期" | "中期" | "長期";
  referencePrice: string;
  stopPrice: string;
  targetPrice: string;
  note?: string;
}

export default function Plant() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formData>();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<formData> = (data) => {
    console.log(data);
    dispatch(addPlan(data)).then(() => {
      successAlertModal();
      reset();
    });
  };

  const onError: SubmitErrorHandler<formData> = (errors, e) => {
    failAlertModal({ errors });
    return;
  };

  return (
    <>
      <div className="text-4xl text-center">我的計畫</div>
      <hr className="my-6" />
      <div className="flex flex-col justify-center">
        <form
          className="2xl:w-5/12 w-12/12"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <div className="flex flex-wrap text-lg">
            {/*  */}
            <div className="sm:w-1/3 w-full pr-3 mb-2">
              <div className="text-gray-700 font-bold">日期</div>
              <input
                className="border-2 border-gray-500 rounded w-full p-1"
                type="date"
                {...register("date")}
              />
            </div>
            {/*  */}
            <div className="sm:w-1/3 w-full pr-3 mb-2">
              <div className="text-gray-700 font-bold">股票代號</div>
              <input
                className="border-2 border-gray-500 rounded w-full p-1"
                type="text"
                {...register("code", { required: true })}
              />
            </div>
            {/*  */}
            <div className="sm:w-1/3 w-full pr-3 mb-2">
              <div className="text-gray-700 font-bold">類型</div>
              <select
                className="border-2 border-gray-500 rounded w-full p-1 h-[40px]"
                {...register("type")}
              >
                <option>請選擇</option>
                <option>存股</option>
                <option>短期</option>
                <option>中期</option>
                <option>長期</option>
              </select>
            </div>
            {/*  */}
            <div className="sm:w-1/3 w-full pr-3 mb-2">
              <div className="text-gray-700 font-bold">參考價</div>
              <input
                className="border-2 border-gray-500 rounded w-full p-1"
                type="text"
                {...register("referencePrice", { required: true })}
              />
            </div>
            {/*  */}
            <div className="sm:w-1/3 w-full pr-3 mb-2">
              <div className="text-gray-700 font-bold">停損價</div>
              <input
                className="border-2 border-gray-500 rounded w-full p-1"
                type="text"
                {...register("stopPrice")}
              />
            </div>
            {/*  */}
            <div className="sm:w-1/3 w-full pr-3 mb-2">
              <div className="text-gray-700 font-bold">目標價</div>
              <input
                className="border-2 border-gray-500 rounded w-full p-1"
                type="text"
                {...register("targetPrice")}
              />
            </div>
            {/*  */}
            <div className="w-1/3 pr-3 mb-2">
              <button className="bg-[#2A6470] hover:bg-[#007f72] rounded py-2 text-xl text-white sm:w-1/3 w-full whitespace-nowrap font-bold">
                新增
              </button>
            </div>
            {/*  */}
          </div>
        </form>

        <Table />
      </div>
    </>
  );
}
