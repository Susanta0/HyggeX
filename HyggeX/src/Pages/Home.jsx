import React from "react";
import { HomeText } from "../Components/HomeText";
import { SelectScroll } from "../Components/SelectScroll";
import { PublishCreate } from "../Components/PublishCreate";
import InputTaken, { Faqq } from "../Components/Faqq";

export const Home = () => {
  return (
    <>
      <div className="px-[104px] pt-[25px]">
        <HomeText />
        <SelectScroll />
        <PublishCreate />

        <InputTaken />
      </div>
    </>
  );
};
