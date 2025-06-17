import React from "react";
import logo from "./../data/welcome-bg.svg";
import Button from "../components/Button";
import { earningData } from "../data/dummy";
import { BsDot } from "react-icons/bs";
import { SparkLine, Stacked } from "../components";
const currentColor = 'blue';

function Ecommerce() {

  return (
    <div className="mt-4">
      <div className="flex flex-col flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-[#F7F7F7] dark:bg-[#33373E] h-44 rounded-xl w-[98%] p-8 pt-9 m-3 bg-logo">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl font-semibold text-black dark:text-white">₹12983.45</p>
              <Button
                bgColor={"blue"}
                borderRadius={"10px"}
                color={"white"}
                size={"md"}
                text={"Download"}
              />
            </div>
          </div>
        </div>
        <div className="flex m-3  flex-wrap justify-center gap-3 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white h-44 dark:text-gray-200 dark:bg-[#33373E] md:w-56  p-4 pt-9 rounded-2xl "
            >
              <button
                type="button"
                style={{
                  color: item.iconColor,
                  backgroundColor: item.iconBg,
                }}
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
        </div>

        <div className="flex gap-10 flex-wrap justify-center">
          <div className="bg-white dark:text-gray-200 dark:bg-[#33373E] m-3 p-4 rounded-2xl md:w-[80%]  ">
            <div className="flex justify-between">
              <p className="font-semibold text-xl">Revenue Updates</p>
            </div>
            <div className="mt-10 flex gap-10 flex-wrap justify-center">
              <div className=" border-r-1 border-color m-4 pr-10">
                <div>
                  <p>
                    <span className="text-3xl font-semibold">$93,438</span>
                    <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                      23%
                    </span>
                  </p>
                  <p className="text-gray-500">Budget</p>
                </div>
                <div className="mt-8">
                  <div className="text-3xl font-semibold mb-2">$48,487</div>
                  <p className="text-gray-500 ">Expense</p>
                </div>

                <div className="mt-5">
                  <SparkLine
                    // currentColor={currentColor}
                    // id="line-sparkLine"
                    // type="Line"
                    // height="80px"
                    // width="250px"
                    // data={SparklineAreaData}
                    // color={currentColor}
                  />
                </div>
                <div className="mt-10">
                    <Button
                      color="white"
                      bgColor={currentColor}
                      text="Download Report"
                      borderRadius="10px"
                    />
                  </div>
              </div>
              <div>
                <Stacked />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
