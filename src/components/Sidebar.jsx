import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { Tooltip } from "antd";
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

function Sidebar() {
  const { activeMenu, setActiveMenu } = useStateContext();

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="h-full p-4 overflow-y-scroll">
      <div className="flex justify-between">
        <div
          className="text-2xl font-bold flex items-center gap-2"
          onClick={() => {
            setActiveMenu(false);
          }}
        >
          <SiShopware />
          <span>Shoppy</span>
        </div>
        <Tooltip
          className="text-xl mt-2"
          title="Close"
          placement="bottom"
          onClick={() => {
            setActiveMenu(false);
          }}
        >
          <MdOutlineCancel />
        </Tooltip>
      </div>

      <div className="mt-10">
        {links.map((item) => (
          <div key={item.title}>
            <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
            {item.links.map((link) => (
              <NavLink
                to={`/${link.name}`}
                key={link.name}
                onClick={() => {}}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : "",
                })}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                {link.icon}
                <span className="capitalize ">{link.name}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
