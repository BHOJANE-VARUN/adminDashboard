import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";

function NavbarHeader({title,name}) {
    const { handleClick } = useStateContext();
  return (
    <div className="flex justify-between text-2xl text-gray-500">
      <div className="text-black dark:text-white font-semibold text-xl">
        {title}
      </div>
      <button
        type="button"
        className="cursor-pointer  hover:drop-shadow-2xl hover:drop-shadow-black"
        onClick={() => handleClick(name, false)}
      >
        <MdOutlineCancel />
      </button>
    </div>
  );
}

export default NavbarHeader;
