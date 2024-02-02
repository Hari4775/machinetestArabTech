import React from "react";
import { facebook, instagram, media, twitter } from "../../Assets/icons/Icons";

const FounderCard = () => {
  return (
    <div
      className="bg-white rounded-l-lg rounded-r-lg shadow-lg h-5/6 "
      style={{ width: "13%" }}
    >
      <div className="image">
        <img src={media} />
        <div className="textcard justify-center content-center">
          <p className="text-center">John Doe</p>
          <p className="text-center">CEO</p>
          <div className="flex  justify-center  ">
            <img className="will-change-auto" src={facebook} />
            <img src={instagram} />
            <img src={twitter} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderCard;
