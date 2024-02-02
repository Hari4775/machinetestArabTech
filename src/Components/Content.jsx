import React from "react";
import Graph from "./ContentData/Graph";
import Pai from "./ContentData/Pai";
import Table from "./ContentData/Table";
import FounderCard from "./ContentData/FounderCard";
import { Rectangle10 } from "../Assets/icons/Icons";

const Content = () => {
  return (
    <div className="w-5/6">
      <div className="bg-slate-200 flex  justify-between mt-10  h-20">
        <h5 className=" ml-11">Good Morning!</h5>
        <div className="headerUserIcon bg-white h-5/6 flex items-center rounded-md mr-20 ">
          <div className="ml-2">
            <h5 className="text-gray-800">John Doe</h5>
            <p className="text-gray-600">johndoe@.com</p>
          </div>
          <div className="w-12">
            <img className="p-2" src={Rectangle10} alt="" />
          </div>
        </div>
      </div>

      <div className="w-full bg-slate-200 h-full ">
        <div className="bg-slate-200 flex mb-5 content  h-2/6 w-full ">
          <Graph />
          <Pai />
        </div>
        <div className="flex   bg-slate-200 h-3/6 w-full ">
          <Table />
          <FounderCard />
        </div>
      </div>
    </div>
  );
};

export default Content;
