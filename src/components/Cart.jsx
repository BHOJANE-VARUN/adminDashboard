import React from "react";
import { cartData } from "../data/dummy";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useStateContext } from "../contexts/ContextProvider";
import NavbarHeader from "./NavbarHeader";
// {
//   image:
//     product5,
//   name: 'butterscotch ice-cream',
//   category: 'Milk product',
//   price: '$250',
// },
function OrderCard({ image, name, category, price }) {
  return (
    <div className="border-b-2 border-gray-200 flex gap-5 items-center p-2">
      <img
        src={image}
        alt="order Item"
        className="w-24 h-20 border-2 rounded-md"
      />
      <div className="flex flex-col justify-center items-start  w-full">
        <div>
          <div className="font-bold dark:text-white">{name}</div>
          <p className="text-gray-500 font-semibold text-sm">{category}</p>
        </div>
        <div className="flex w-full justify-between items-center">
          <div className="font-semibold text-xl">{price}</div>
          <div className="flex items-center border-1 border-r-0 border-color rounded">
            <div className="p-2 border-r-1 dark:border-gray-600 border-color text-red-600 ">
              <AiOutlineMinus />
            </div>
            <div className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">
              0
            </div>
            <div className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">
              <AiOutlinePlus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cart() {
  const { handleClick,currentColor } = useStateContext();
  return (
    <div className="halftransparent w-screen fixed nav-item top-0 right-0">
      <div className="h-screen w-96 bg-white float-right p-8 flex flex-col gap-5">
       <NavbarHeader title={"Shopping Chart"} name={"cart"} />
        <div className="flex flex-col gap-5 ">
          {cartData.map((item) => (
            <OrderCard
              key={item.image}
              image={item.image}
              name={item.name}
              category={item.category}
              price={item.price}
            />
          ))}
        </div>
        <div>
          <div className="flex justify-between items-center mt-3">
            <div className="text-lg text-gray-500">Sub Total</div>
            <div className="font-bold">$890</div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <div className="text-lg text-gray-500">Total</div>
            <div className="font-bold">$890</div>
          </div>
        </div>
        <button
          type="button"
          className="w-full  p-3 font-semibold rounded-md mt-3 hover:drop-shadow-sm hover:drop-shadow-black"
          style={{backgroundColor: currentColor,color: "#fff"}}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Cart;
