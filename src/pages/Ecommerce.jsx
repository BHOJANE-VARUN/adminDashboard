import React from "react";
import logo from "./../data/welcome-bg.svg"
import Button from "../components/Button";
import { earningData } from "../data/dummy";

function Ecommerce() {
  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full p-8 pt-9 m-3 bg-logo">
          <div className="flex justify-between items-center">
            <div>
            <p className="font-bold text-gray-400">Earnings</p>
            <p className="text-2xl font-semibold text-black">₹12983.45</p>
            <Button bgColor={'blue'} borderRadius={"10px"} color={'white'} size={'md'} text={'Download'} />
            </div>
          </div>
          {/* <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
