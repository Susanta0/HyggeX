import React from "react";
import Frame from "../assets/Frame.svg";
import Framee from "../assets/Framee.svg";

export const PublishCreate = () => {
  return (
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center gap-2">
        <img src={Frame} alt="group logo" className="" />
      </div>
      <div>
        <img src={Framee} alt="logo3" />
      </div>
    </div>
  );
};
