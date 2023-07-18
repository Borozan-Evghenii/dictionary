import {PiBooksLight} from "react-icons/pi";
import {MdDarkMode, MdLightMode} from "react-icons/md";
import {useToggleMode} from "../../hooks/useToggle.js";

const Header = () => {
  const {value, changeMode}  = useToggleMode()
  console.log(value)
  return (
      <header className="container py-[50px] flex justify-between items-center">
          <div className="logo">
            <PiBooksLight className="w-14 h-14 dark:text-white"/>
          </div>
          <div className="flex gap-4">
            <button
                onClick={()=> changeMode()}
                className="mode-btn dark:text-white" >
              {value === 'light'
                  ? <MdDarkMode className="w-[23px] h-[23px]" />
                  :  <MdLightMode className="w-[23px] h-[23px]" /> }
            </button>
          </div>
      </header>
  );
};

export default Header;