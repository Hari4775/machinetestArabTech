import React from "react";
import {
  briefcase,
  circlemenu,
  help,
  puzzle,
  shutdown,
  stateboard,
  support,
} from "../Assets/icons/Icons";

const Sidebar = () => {
  return (
    <div className="sidebar  h-full w-1/6 ">
      <div class="flex flex-col justify-center items-center">
        <img className="items-center" src={briefcase} alt="briefcase" />
        <img src={stateboard} alt="stateboard" />
      </div>
      <div className="flex mt-40 ml-3     ">
        <button className="bg-white w-full items-center  rounded-l-lg flex ">
          <img className="ml-2" src={circlemenu} alt="circlemenu" />
          <p className="text-base md:text-lg lg:text-xl sm:text-sm ">
            Dashbord
          </p>
        </button>
      </div>

      <div className="flex my-6 ml-3 ">
        <button className="bg-black w-full items-center  rounded-l-lg flex  h-8">
          <img className="ml-2" src={support} alt="circlemenu" />
          <p className=" ml-2 text-white">Support</p>
        </button>
      </div>

      <div className="flex my-6 ml-3 ">
        <button className="bg-black w-full rounded-l-lg flex items-center h-8">
          <img className="ml-2" src={puzzle} alt="circlemenu" />
          <p className="ml-2 text-white">Plugins</p>
        </button>
      </div>

      <div className="flex my-6 ml-3 mb-52">
        <button className="bg-black w-full rounded-l-lg flex items-center h-8">
          <img className="ml-2" src={help} alt="circlemenu" />
          <p className="ml-2 text-white">Help</p>
        </button>
      </div>

      <div className="flex  ml-3 ">
        <button className="bg-white w-full flex items-center  h-8">
          <p className="ml-2 text-red-600">Logout</p>
          <img className="ml-2" src={shutdown} alt="circlemenu" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
