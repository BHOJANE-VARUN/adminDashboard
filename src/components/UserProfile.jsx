import React from "react";
import NavbarHeader from "./NavbarHeader";
import { chatData, userProfileData } from "../data/dummy";
import { Button } from "./../components";
import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../data/avatar.jpg";

function UserProfile() {
  const { currentColor } = useStateContext();
  return (
    <div className="flex flex-col gap-5 absolute right-0 top-15  w-sm  navbar bg-white shadow-md rounded-lg p-5">
      <NavbarHeader title={"User Profile"} name={"userProfile"} />

      <div className="flex items-center justify-start gap-10 p-5 border-color transition-colors border-b-2">
        <img
          src={avatar}
          alt="User Avatar"
          className="rounded-full w-20 h-20"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-xl">Michael Roberts</span>
          <span className="text-sm text-gray-500">Administrator</span>
          <span className=" font-semibold text-gray-700">info@shop.com</span>
        </div>
      </div>

      <div>
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-5 hover:bg-gray-100 border-color transition-colors border-b-2"
          >
            <div
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="rounded-xl h-11 w-11 flex items-center justify-center text-xl"
            >
              {item.icon}
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">{item.title}</span>
              <span className="text-sm text-gray-500">{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
      <Button
        bgColor={currentColor}
        text={"Logout"}
        borderRadius={"5px"}
        color={"white"}
      />
    </div>
  );
}

export default UserProfile;
