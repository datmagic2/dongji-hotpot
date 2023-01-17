import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen p-5 bg-[#F2F3F9]">
      <h1 className="text-center font-bold text-2xl mb-6 text-primary-color">
        Dongji Hotpot
      </h1>
      <div className="mb-7">
        <p className="font-bold text-[31px] text-primary-color">xin chào</p>
        <p className="font-semibold text-[40px] text-primary-color">
          Thành Đạt
        </p>
      </div>
      <p className="text-xl text-primary-color font-bold mb-5">
        Quản lý chức năng
      </p>
      <div className="flex flex-wrap gap-[10px]">
        <div className="w-[165px] h-[100px] bg-white rounded-lg flex justify-center items-center cursor-pointer">
          <span className="text-primary-color font-semibold text-lg">
            Đơn hàng
          </span>
        </div>
        <div className="w-[165px] h-[100px] bg-white rounded-lg flex justify-center items-center cursor-pointer">
          <span className="text-primary-color font-semibold text-lg">
            Doanh thu
          </span>
        </div>
        <div className="w-[165px] h-[100px] bg-white rounded-lg flex justify-center items-center cursor-pointer">
          <span className="text-primary-color font-semibold text-lg">
            Doanh thu tổng
          </span>
        </div>
        <div className="w-[165px] h-[100px] bg-white rounded-lg flex justify-center items-center cursor-pointer">
          <span className="text-primary-color font-semibold text-lg">
            Quản lý ca
          </span>
        </div>
        <div className="w-[165px] h-[100px] bg-white rounded-lg flex justify-center items-center cursor-pointer">
          <span className="text-primary-color font-semibold text-lg">
            Chi tiêu
          </span>
        </div>
        <div className="w-[165px] h-[100px] bg-white rounded-lg flex justify-center items-center cursor-pointer">
          <span className="text-primary-color font-semibold text-lg">
            Món ăn
          </span>
        </div>
        <div className="w-[165px] h-[100px] bg-white rounded-lg flex justify-center items-center cursor-pointer">
          <span className="text-primary-color font-semibold text-lg">
            Quản lý tổng
          </span>
        </div>
        <div className="w-[165px] h-[100px] bg-white rounded-lg flex justify-center items-center cursor-pointer">
          <span className="text-primary-color font-semibold text-lg">
            Quản lý ca
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
