import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}



export const ContextProvider = ({children}) =>{
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked,setisClicked] = useState(initialState); 
    const handleClick = (clicked)=>{ setisClicked(({...initialState,[clicked]:true})) }
    const [screenSize,setScreenSize] = useState(undefined);
    const [isThemeSettings, setIsThemeSettings] = useState(false);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setcurrentMode] = useState("Light")
      const setColor = (color) => {
    setCurrentColor(color);
    setIsThemeSettings(false);
  };
    const setMode = (e)=>{
        setcurrentMode(e.target.value);
        setIsThemeSettings(false);
    }
    return (
        <StateContext.Provider 
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                handleClick,
                screenSize,
                setScreenSize,
                isThemeSettings,
                setIsThemeSettings,
                setMode,
                setColor,
                currentColor,
                currentMode
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext); 