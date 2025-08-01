"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-xl shadow-md flex max-w-5xl w-full p-6">
        <div className="w-1/2 flex justify-center items-center">
          <img
            src="\assets\AdminFormLogo.png" 
            alt="Illustration"
            className="w-full max-w-md"
          />
        </div>

        <div className="w-1/2 flex flex-col justify-center px-10">
          <h1 className="text-[20px] font-bold tracking-wide mb-1">
            <span className="text-[#7ED3F7] text-[22px]">THE</span>{" "}
            <span className="text-[#588BF2] font-extrabold text-[22px]">
              EVENTIX
            </span>
          </h1>
          <p className="text-sm mb-6">From screen to scene in seconds</p>

          <h2 className="text-xl font-medium mb-6">Manage events with control</h2>

          <label className="text-sm">Admin ID/ Email</label>
          <input
            type="text"
            defaultValue="ORG123456"
            className="border rounded-lg px-3 py-2 mb-4 w-full focus:outline-none focus:ring-1 focus:ring-blue-400"
          />

          <label className="text-sm">Password</label>
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              defaultValue="123456"
              className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-400 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 text-gray-500"
            >
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>

          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" defaultChecked className="accent-[#44C1F1]" />
              Remember Me
            </label>
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Forget Password ?
            </a>
          </div>

          <button className="bg-[#5DBEEB] hover:bg-[#4AA7D1] text-white rounded-lg py-2 text-lg font-medium">
            Let’s Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
