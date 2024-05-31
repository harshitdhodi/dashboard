import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.webp";
import Button from '@mui/material/Button';
import { RiMenuUnfold4Line2 } from "react-icons/ri";
import { MdLightMode } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import SearchBox from "./SearchBox";
import { FaShieldAlt } from "react-icons/fa";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="header">
      <div className="flex items-center justify-between w-full max-w-full mx-auto">
        <div className="flex items-center space-x-2 ml-3">
          <Link to='/dashboard' className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="w-14 h-14" />
            <span className="text-black-600 text-lg font-extrabold">HOTASH</span>
          </Link>
        </div>

        <div className="w-1/4 flex items-center pl-16">
          <Button className="rounded-full circle">
            <RiMenuUnfold4Line2 className="text-black" />
          </Button>
          <SearchBox />
        </div>

        <div className="w-full flex items-center pl-16 justify-end gap-4 mr-9">
          <Button className="rounded-full circle">
            <MdLightMode className="text-black hover:text-blue-700" />
          </Button>
          <Button className="rounded-full circle">
            <FaShoppingCart className="text-black hover:text-blue-700" />
          </Button>
          <Button className="rounded-full circle">
            <MdEmail className="text-black hover:text-blue-700" />
          </Button>
          <Button className="rounded-full circle">
            <IoIosNotifications className="text-black hover:text-blue-700" />
          </Button>

          <div>
            <button onClick={handleClick} className="myAcc flex items-center cursor-pointer text-left">
              <div className="userImg p-[.5px] border-blue-600 w-[45px] rounded-full border-[3px]">
                <span className="circle object-cover overflow-hidden w-5">
                  <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="" className="rounded-full w-[40px] h-[40px]" />
                </span>
              </div>

              <div className="userInfo p-3">
                <h4 className="userInfo font-medium text-[18px] text-blue-800">Harshit Dhodi</h4>
                <p className="text-[12px] opacity-[.7]">harshit@gmail.com</p>
              </div>
            </button>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                My Account
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <FaShieldAlt fontSize="large" />
                </ListItemIcon>
                Reset Password
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Logout fontSize="small" className="text-red-500" />
                </ListItemIcon>
                <h4 className="text-red-500">Logout</h4>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
