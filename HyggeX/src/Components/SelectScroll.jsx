import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import { TbReload } from "react-icons/tb";
import { MdZoomInMap } from "react-icons/md";
export const SelectScroll = () => {
  return (
    <>
      <Tabs
        position="relative"
        variant="unstyled"
        className=" flex justify-center m-auto mt-5 w-[546px] text-center"
      >
        <TabList className=" flex justify-center px-16 gap-4 ">
          <Tab className="text-[20px] font-semibold text-[#06286E]">Study</Tab>
          <Tab className="text-[20px] font-semibold text-[#696671]">Quiz</Tab>
          <Tab className="text-[20px] font-semibold text-[#696671]">Test</Tab>
          <Tab className="text-[20px] font-semibold text-[#696671]">Game</Tab>
          <Tab className="text-[20px] font-semibold text-[#696671]">Others</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
        />
        <TabPanels className=" mt-4">
          <TabPanel>
            <Responsive />
          </TabPanel>
          <TabPanel>
            <Responsive />
          </TabPanel>
          <TabPanel>
            <Responsive />
          </TabPanel>
          <TabPanel>
            <Responsive />
          </TabPanel>
          <TabPanel>
            <Responsive />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <div className="flex w-[546px] m-auto mt-4 h-10  items-center justify-around">
        <TbReload className="w-5 h-5 text-[#06286E]" />
        <MdZoomInMap className="w-5 h-5 text-[#06286E]" />
      </div>
    </>
  );
};

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdLightbulbOutline } from "react-icons/md";
import { IoVolumeMediumOutline } from "react-icons/io5";
function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-coainer">
      <Slider {...settings}>
        <div className="h-[300.19px] w-[712px] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400 rounded-2xl">
          <div className="flex justify-between px-10 text-white mt-10">
            <MdLightbulbOutline className="w-[25.5px] h-[24.85px]" />
            <IoVolumeMediumOutline className="w-[25.5px] h-[24.85px]" />
          </div>
          <p className=" mt-20 font-bold text-[38.26px] text-white">
            9 + 6 + 7x - 2x - 3
          </p>
        </div>
        <div className="h-[300.19px] w-[712px] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400">
          <div className="flex justify-between px-10 text-white mt-10">
            <MdLightbulbOutline className="w-[25.5px] h-[24.85px]" />
            <IoVolumeMediumOutline className="w-[25.5px] h-[24.85px]" />
          </div>
          <p className=" mt-20 font-bold text-[38.26px] text-white">4x+2-3x</p>
        </div>
        <div className="h-[300.19px] w-[712px] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400">
          <div className="flex justify-between px-10 text-white mt-10">
            <MdLightbulbOutline className="w-[25.5px] h-[24.85px]" />
            <IoVolumeMediumOutline className="w-[25.5px] h-[24.85px]" />
          </div>
          <p className=" mt-20 font-bold text-[38.26px] text-white">
            x:3(2x-5)=15
          </p>
        </div>
        <div className="h-[300.19px] w-[712px] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400">
          <div className="flex justify-between px-10 text-white mt-10">
            <MdLightbulbOutline className="w-[25.5px] h-[24.85px]" />
            <IoVolumeMediumOutline className="w-[25.5px] h-[24.85px]" />
          </div>
          <p className=" mt-20 font-bold text-[38.26px] text-white">
            2x 2 −3x+4 when 𝑥=2x=2
          </p>
        </div>
        <div className="h-[300.19px] w-[712px] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400">
          <div className="flex justify-between px-10 text-white mt-10">
            <MdLightbulbOutline className="w-[25.5px] h-[24.85px]" />
            <IoVolumeMediumOutline className="w-[25.5px] h-[24.85px]" />
          </div>
          <p className=" mt-20 font-bold text-[38.26px] text-white">
            (x+3)(x−2)
          </p>
        </div>
        <div className="h-[300.19px] w-[712px] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400">
          <div className="flex justify-between px-10 text-white mt-10">
            <MdLightbulbOutline className="w-[25.5px] h-[24.85px]" />
            <IoVolumeMediumOutline className="w-[25.5px] h-[24.85px]" />
          </div>
          <p className=" mt-20 font-bold text-[38.26px] text-white">
            (2x−1)(3x+4)
          </p>
        </div>
        <div className="h-[300.19px] w-[712px] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400">
          <div className="flex justify-between px-10 text-white mt-10">
            <MdLightbulbOutline className="w-[25.5px] h-[24.85px]" />
            <IoVolumeMediumOutline className="w-[25.5px] h-[24.85px]" />
          </div>
          <p className=" mt-20 font-bold text-[38.26px] text-white">
            2x+5=3x−1
          </p>
        </div>
        <div className="h-[300.19px] w-[712px] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400">
          <div className="flex justify-between px-10 text-white mt-10">
            <MdLightbulbOutline className="w-[25.5px] h-[24.85px]" />
            <IoVolumeMediumOutline className="w-[25.5px] h-[24.85px]" />
          </div>
          <p className=" mt-20 font-bold text-[38.26px] text-white">
            ∣3x−2∣ when x=4
          </p>
        </div>
        <div className="h-[300.19px] w-[712px] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400">
          <div className="flex justify-between px-10 text-white mt-10">
            <MdLightbulbOutline className="w-[25.5px] h-[24.85px]" />
            <IoVolumeMediumOutline className="w-[25.5px] h-[24.85px]" />
          </div>
          <p className=" mt-20 font-bold text-[38.26px] text-white">
            2x+5=3x−1
          </p>
        </div>
        <div className="h-[300.19px] w-[712px] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400">
          <div className="flex justify-between px-10 text-white mt-10">
            <MdLightbulbOutline className="w-[25.5px] h-[24.85px]" />
            <IoVolumeMediumOutline className="w-[25.5px] h-[24.85px]" />
          </div>
          <p className=" mt-20 font-bold text-[38.26px] text-white">
            (x+3)(x−2)
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
