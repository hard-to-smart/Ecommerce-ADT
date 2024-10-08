import React, { useState } from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import userAvatar from "../assets/avatar.png"
import { FaPencil } from "react-icons/fa6";

const ProfileCard = () => {
  const [changePassword, setChangePassword] = useState(false)
  const handleChangePassword=()=>{
    setChangePassword((prev)=> !prev)
  }
  return (
    <div className="relative p-8 bg-white/10 backdrop-blur-lg shadow-xl border border-white/20 rounded-lg px-20 py-10 flex flex-col jusstify-center items-center ">

      <div className="absolute rounded-full h-72 w-72 left-72 -top-10 opacity-50 bg-gradient-to-br from-green-400 to-gray-800 "></div>
    <div className="absolute rounded-full h-60 w-60 right-72 -bottom-10 opacity-70 bg-gradient-to-br from-green-400 to-gray-800 "></div>
    <img src={userAvatar} className="absolute -top-14 mx-auto w-[100px] h-[100px]"/>
      <div className="flex flex-col gap-6 justify-center">
      <div className=" text-center">
        <h2 className="text-2xl font-bold text-neutral-200">User Information</h2>
        <hr className="my-2 border-gray-300" />
      </div>
      <div className="flex justify-around mb-4">
        <div className="text-center">
          <p className="font-bold text-lg text-neutral-300">Email</p>
          <p className="font-semibold text-neutral-400">abc@gmail.com</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-lg text-neutral-300">Phone</p>
          <p className="font-semibold text-neutral-400">12781239123</p>
        </div>
        
      </div>
        <div className="text-center gap-4 justify-center items-center text-white">
          <p className="font-bold text-lg text-neutral-300 cursor-pointer" onClick={handleChangePassword}>Change Password </p>
          {
            changePassword && <input type="password"/>
          }
        </div>
        
      </div>
      <hr className="my-4 border-gray-300" />
      <SocialMediaIcons/>
</div>  

);
};

export default ProfileCard;
