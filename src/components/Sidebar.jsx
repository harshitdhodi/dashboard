import { useState } from 'react';
import { MdOutlineDashboard } from 'react-icons/md';
import { FaShoppingCart } from "react-icons/fa";
import { FaAngleRight } from 'react-icons/fa';
import { FaProductHunt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { Link } from 'react-router-dom';
import Logout from './Logout';

// Define your menu items
const menuItems = [
  {
    icon: MdOutlineDashboard,
    heading: "Dashboard",
    link: "/dashboard"
  },
  {
    icon: FaProductHunt,
    heading: "Products",
    link: "/products",
    subCategory: ['Product Category', 'Product View', 'Product Upload']
  },
  {
    icon: FaShoppingCart,
    heading: "Orders",
    link: "/orders"
  },
  {
    icon: MdMessage,
    heading: "Messages",
    link: "/messages"
  },
  {
    icon: IoIosNotifications,
    heading: "Notifications",
    link: "/notifications"
  }
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMenuClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-[17%] h-[100vh] fixed top-[70px] left-0 bg-white overflow-y-scroll overflow-x-hidden scrollbar-thin">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <button
              className={`w-[90%] p-3 ml-3 rounded flex justify-between items-center ${
                activeIndex === index ? 'bg-gray-300' : 'hover:bg-gray-200'
              }`}
              onClick={() => handleMenuClick(index)}
            >
              <div className='flex items-center'>
                <item.icon className="pr-2" size={28} />
                {item.link ? (
                  <Link to={item.link} className="no-underline text-black">
                    <h4>{item.heading}</h4>
                  </Link>
                ) : (
                  <h4>{item.heading}</h4>
                )}
              </div>
              {item.subCategory && (
                <FaAngleRight size={18} className={activeIndex === index ? 'rotate-90' : ''} />
              )}
            </button>
            {item.subCategory && activeIndex === index && (
              <ul className="ml-8 mt-2">
                {item.subCategory.map((subItem, subIndex) => (
                  <li key={subIndex} className="hover:bg-gray-200 py-1 w-[90%] p-3 ml-3 rounded flex justify-between items-center">
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}

        <Logout />
      </ul>
    </div>
  );
};

export default Sidebar;
