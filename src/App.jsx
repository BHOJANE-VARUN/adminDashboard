import { useState } from 'react'
import '@ant-design/v5-patch-for-react-19';
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import 'antd/dist/reset.css'; // For AntD v5+
import { Tooltip } from 'antd';
import { Navbar, Footer, Sidebar, ThemeSetting } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import { useStateContext } from './contexts/ContextProvider';

function App() {
  
  const {activeMenu,setActiveMenu} = useStateContext();
  const themeSetting = false;
  return (
    <div>
      <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
           <Tooltip title={"Settings"}>
              <button className='text-3xl p-3 rounded-full hover:bg-light-gray hover:drop-shadow-xl'  style={{background:'blue'}}>
                <FiSettings className='text-white text-3xl'/>
              </button>
           </Tooltip>
        </div>
        {activeMenu ? (
            <div className="w-72 h-full fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar/>
            </div>
          ) : (
            <div className="hidden">
              <Sidebar/>
            </div>
          )}
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
