import React from "react";
import Rectangle10 from "../Assets/icons/Rectangle 10.png";

const Header = () => {
  return (
    <div className="bg-cyan-400 flex  justify-between  py-3 h-20">
      <h5 className=" ml-11">Good Morning!</h5>
      <div className="headerUserIcon bg-white h-12 flex items-center rounded-md ">
        <div className="ml-2">
          <h5 className="text-gray-800 font-bold">John Doe</h5>
          <p className="text-gray-600 font-light">johndoe@.com</p>
        </div>

        <div className="w-12">
          <img className="p-2" src={Rectangle10} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
