import Modal from "react-modal";
import React, { useCallback } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "@/redux/hook";
import { login } from "../pageReducer";

interface loginModalData {
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginModal = ({ modalIsOpen, setModalIsOpen }: loginModalData) => {
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
      dispatch(login(apiData));
      reset();
      setModalIsOpen(false);
    })();
  }, [dispatch, handleSubmit, reset, setModalIsOpen]);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        className="top-[50%] left-[50%] right-auto bottom-auto mr-[-50%] p-0 absolute translate-x-[-50%] translate-y-[-50%] border-0 bg-white shadow rounded outline-none"
        contentLabel="loginModal"
      >
        <div className="flex md:flex-row flex-col">
          <div className="bg-[#2A6470] flex md:items-center justify-center md:px-5 py-3 rounded-l">
            <div>
              <Image src="/duck.png" width={72} height={72} alt="duck" />
            </div>
          </div>
          <div className="p-5">
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <div className="flex flex-col justify-between h-[50vh] font-semibold">
                <div className="text-4xl text-center mx-[4rem]">歡迎回來</div>
                <div className="text-2xl text-center text-gray-400 font-normal">
                  請先登入
                </div>
                <div className="text-xl text-gray-500">信箱</div>
                <input
                  type="text"
                  className={`border-b-2 focus:outline-none pb-2 focus:border-gray-800`}
                  placeholder="帳號(電子郵件)"
                  {...register("email", {
                    required: true,
                    minLength: 2,
                    pattern: /^\S+@\S+(\.|-)+\S+$/i,
                  })}
                />
                {errors?.email?.type === "required" && (
                  <span className="text-red-400">請輸入帳號</span>
                )}
                {errors?.email?.type === "pattern" && (
                  <span className="text-red-400">請輸入正確的Email格式</span>
                )}
                <div className="text-xl text-gray-500">密碼</div>
                <input
                  type="password"
                  className="border-b-2 focus:outline-none pb-2 focus:border-gray-800"
                  placeholder="密碼"
                  autoComplete="current-password"
                  {...register("password", { required: true, minLength: 8 })}
                />
                {errors?.password?.type === "required" && (
                  <span className="text-red-400">請輸入密碼</span>
                )}
                {errors?.password?.type === "minLength" && (
                  <span className="text-red-400">密碼至少 8 位數</span>
                )}
                <button className="bg-[#2A6470] hover:bg-[#007f72] rounded py-2 text-xl text-white">
                  登入
                </button>
                <div className="flex justify-between px-1">
                  <div className="text-gray-400 hover:text-black cursor-pointer cursor-not-allowed">
                    忘記密碼?
                  </div>
                  <div className="text-gray-400 hover:text-black cursor-pointer cursor-not-allowed">
                    註冊?
                  </div>
                  <div
                    className="text-gray-400 hover:text-black cursor-pointer"
                    onClick={() => setModalIsOpen(false)}
                  >
                    返回
                  </div>
                </div>
                <hr />
                <div className="flex flex-col justify-between text-white">
                  <button className="bg-[#3B5998] hover:text-xl py-2 rounded mb-2">
                    使用Facebook帳號登入
                  </button>
                  <button className="bg-[#dd4b39] hover:text-xl py-2 rounded">
                    使用Google帳號登入
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default LoginModal;
