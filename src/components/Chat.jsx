import React from 'react'
import NavbarHeader from './NavbarHeader'
import { chatData } from '../data/dummy';
import { Button } from "./../components"
import { useStateContext } from '../contexts/ContextProvider';


function Chat() {
  const {currentColor} = useStateContext();
  return (
    <div className='flex flex-col gap-5 absolute right-0 top-10 md:right-50 w-sm  navbar bg-white shadow-md rounded-lg p-5 m-4'>
        <NavbarHeader title={"Messages"} name={"chat"} />
        <div>
          {chatData.map((chat, index) => (
            <div key={index} className='flex items-center gap-3 p-5 hover:bg-gray-100 border-color transition-colors border-b-2'>
              <img src={chat.image} alt={chat.name} className='w-10 h-10 rounded-full' />
              <div className='flex flex-col'>
                <span className='font-semibold'>{chat.message}</span>
                <span className='text-sm text-gray-500'>{chat.desc}</span>
                <span className='text-xs text-gray-500'>{chat.time}</span>
              </div>
            </div>
          ))}
        </div>
        <Button bgColor={currentColor} text={"See All Messages"} borderRadius={"5px"} color={"white"}/>
    </div>
  )
}

export default Chat