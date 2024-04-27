import React from "react";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

export const HomeText = () => {
  return (
    <>
      <div className="flex items-center gap-1">
        <GoHome className="w-[30px] h-[30px] text-[#696671]" />
        <IoIosArrowForward className="w-[10.41px] h-[12px] text-[#06286E]" />
        <p class="font-inter text-base font-medium leading-[21.78px] text-[#696671] text-[18px]">
          Flashcard
        </p>
        <IoIosArrowForward className="w-[10.41px] h-[12px] text-[#06286E]" />
        <p class="font-inter text-base font-medium leading-[21.78px] text-[#696671] text-[18px]">
          Mathematics
        </p>
        <IoIosArrowForward className="w-[10.41px] h-[12px] text-[#06286E]" />
        <p class="font-inter text-base font-medium leading-[21.78px] text-[#06286E] text-[18px]">
          Relation and Function
        </p>
      </div>

      <div className="pt-[30px]">
        <h2 className="font-montserrat font-bold text-[32px] text-blue-900">
          Relations and Functions ( Mathematics )
        </h2>
      </div>
    </>
  );
};
