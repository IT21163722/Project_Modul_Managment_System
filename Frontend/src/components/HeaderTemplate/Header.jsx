import { useContext,useState, useEffect } from 'react';
import './Header.css'
import { ThemeContext } from '../../ThemeContext';

import { BiSearch } from 'react-icons/bi';
import { IoIosNotifications } from "react-icons/io";
import { AiOutlineUser } from 'react-icons/ai';
import { RiSettingsLine } from 'react-icons/ri';
import { HiOutlineMoon, HiOutlineLogout} from "react-icons/hi";


const Header = () => {
const {DarkTheme, setDarkTheme } = useContext(ThemeContext);

const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
      const timerID = setInterval(() => {
          setCurrentTime(new Date());
      }, 1000);

      
      return () => clearInterval(timerID);
  }, []);

function changeTheme(){
  setDarkTheme(!DarkTheme);
}

  return  (
  <header className={`${DarkTheme && "dark"}`}>
    <div className="search-bar">
        <input type="text" placeholder='search...' />
        <BiSearch className='icon' />
    </div>

    <div className="divider"></div>

    {/* <div className="date">
      <div className="date">Date: {currentTime.toLocaleDateString()} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Time: {currentTime.toLocaleTimeString()}</div>
    </div> */}

        <div className="date">Date: {currentTime.toLocaleDateString()}</div>
        <div className="time">Time: {currentTime.toLocaleTimeString()}</div>

    <div className="tools">
         <AiOutlineUser className="icon" />
         <IoIosNotifications className="icon" />

    <div className="divider"></div>
        
        <HiOutlineMoon className="icon" onClick={changeTheme} />
        <RiSettingsLine className='icon' />
        <HiOutlineLogout className='icon' />

      <div className="divider"></div>

      <div className="user">
      <img src="../src/assets/isuru.jpeg" alt="Profile" className="profile-img" />
      </div>

    </div>

  </header>
  );
};

export default Header
