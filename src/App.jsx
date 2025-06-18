import { useState } from "react";
import "@ant-design/v5-patch-for-react-19";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import "antd/dist/reset.css"; // For AntD v5+
import { Tooltip } from "antd";
import { Navbar, Footer, Sidebar, ThemeSetting } from "./components";
import {
  Ecommerce,
  Orders,
  CalendarPage,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorMapping,
  Editor,
} from "./pages";
import { useStateContext } from "./contexts/ContextProvider";

function App() {
  const { activeMenu, setActiveMenu,isThemeSettings,setIsThemeSettings,currentColor,currentMode } = useStateContext();
  return (
    <div className={currentMode==='Dark'?"dark":""}>
      <BrowserRouter>
        <div className="flex relative bg-[#FAFBFB] dark:bg-[#20232A]">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <Tooltip title={"Settings"}>
              <button
                className="text-3xl p-3 rounded-full hover:bg-light-gray hover:drop-shadow-xl"
                style={{ background: currentColor }}
                onClick={() => setIsThemeSettings(true)}
              >
                <FiSettings className="text-white text-3xl" />
              </button>
            </Tooltip>
          </div>
          {activeMenu ? (
            <div className="w-72 h-full fixed sidebar dark:bg-[#33373E] bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="hidden">
              <Sidebar />
            </div>
          )}
         <div
            className={
              activeMenu
                ? 'dark:bg-[#20232A]  bg-[#FAFBFB] min-h-screen h-fit md:ml-72 w-full customLen'
                : 'bg-[#FAFBFB] dark:bg-[#20232A]  w-full min-h-screen flex-2'
            }
          >
            <div className="fixed md:static bg-[#FAFBFB] dark:bg-[#20232A] navbar w-full ">
              <Navbar />
            </div>
            <>
              {isThemeSettings && (<ThemeSetting />)}
           
              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<Ecommerce />)} />
                <Route path="/ecommerce" element={(<Ecommerce />)} />

                {/* pages  */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* apps  */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<CalendarPage />} />

                {/* charts  */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
              </Routes>
            </>
            {/* <Footer /> */}
          </div>
          </div>
      </BrowserRouter>
    </div>

  );
}

export default App;
