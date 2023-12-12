import Modal from "react-modal";
import React, { useState } from "react";
import Image from "next/image";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    minHight: "50vh",
  },
};

interface loginModalData {
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginModal = ({ modalIsOpen, setModalIsOpen }: loginModalData) => {
  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        className="top-[50%] left-[50%] right-auto bottom-auto mr-[-50%] p-0 absolute translate-x-[-50%] translate-y-[-50%] border-1 bg-white shadow-md rounded"
        contentLabel="Example Modal"
      >
        <div className="flex md:flex-row flex-col">
          <div className="bg-[#2A6470] flex md:items-center justify-center md:px-5 py-3 rounded-l">
            <div>
              <Image src="/duck.png" width={72} height={72} alt="duck" />
            </div>
          </div>
          <div className="p-5">
            <div className="flex flex-col justify-between h-[50vh] font-semibold">
              <div className="text-4xl text-center mx-[4rem]">歡迎回來</div>
              <div className="text-2xl text-center text-gray-400 font-normal">
                請先登入
              </div>
              <div className="text-xl text-gray-500">信箱</div>
              <input
                type="text"
                className="border-b-2 focus:outline-none pb-2 focus:border-gray-800"
              />
              <div className="text-xl text-gray-500">密碼</div>
              <input
                type="text"
                className="border-b-2 focus:outline-none pb-2 focus:border-gray-800"
              />
              <button className="bg-[#2A6470] hover:bg-[#007f72] rounded py-2 text-xl text-white">
                登入
              </button>
              <div className="flex justify-between px-1">
                <div className="text-gray-400 hover:text-black cursor-pointer">
                  忘記密碼?
                </div>
                <div className="text-gray-400 hover:text-black cursor-pointer">
                  註冊?
                </div>
                <div className="text-gray-400 hover:text-black cursor-pointer">
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
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default LoginModal;
