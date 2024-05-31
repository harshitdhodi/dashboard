
import './Logout.css'; // Import the CSS file for styling
import { IoMdLogOut } from "react-icons/io";
const Logout = () => {
  return (
    <div className="main-div bg-blue-300 ml-4 mt-10 ">
      <div className="bubble w-[50px] bubble1 overflow-hidden"></div>
      <div className="bubble bubble2"></div>
     
      <button className="logout-button bg-blue-600 flex justify-center items-center "> <span className='mr-2'><IoMdLogOut /></span>Logout</button>
    </div>
  );
}

export default Logout;
