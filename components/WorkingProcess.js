import React from "react";
import AnimatedText from "./AnimatedText";

const WorkingProcess = () => {
  return (
    <div
      className="h-[100vh] w-full"
      style={{
        backgroundColor: "#1F2732",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div className="container text-center p-20">
        <AnimatedText text={"WORK PROCESS"} />
        <h2 className="text-white font-semibold text-5xl">
          Our Working Process
        </h2>
      </div>
      <div
        className="h-[30vh] flex justify-around container"
        style={{
          backgroundImage: "url('/Images/wpLine.png')",
          backgroundSize: "60%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div className="">
          <div
            className="WPimageHover h-[240px] w-[240px] rounded-full"
            style={{
              backgroundImage: "url('/Images/wp1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <div className=" h-full flex flex-col justify-center rounded-full textArea">
              <p className=" nxtText text-center font-bold text-xl text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <div className=" innerCircle bg-pink-500 h-[80px] w-[80px] rounded-full absolute bottom-0 right-0 text-white text-center text-3xl font-bold flex items-center justify-center">
              01
            </div>
            <h2 className=" frstText text-center font-bold text-4xl text-white mt-12 ">
              Design
            </h2>
          </div>
        </div>
        <div className="">
          <div
            className="WPimageHover h-[300px] w-[300px] rounded-full"
            style={{
              backgroundImage: "url('/Images/wp2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <div className=" h-full flex flex-col justify-center rounded-full textArea">
              <p className=" nxtText text-center font-bold text-xl text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <div className=" innerCircle bg-pink-500 h-[80px] w-[80px] rounded-full absolute top-0 right-0 text-white text-center text-3xl font-bold flex items-center justify-center">
              02
            </div>
            <h2 className=" frstText text-center font-bold text-4xl text-white mt-12 ">
              Strategy
            </h2>
          </div>
        </div>
        <div className="">
          <div
            className="WPimageHover h-[240px] w-[240px] rounded-full"
            style={{
              backgroundImage: "url('/Images/wp3.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <div className=" h-full flex flex-col justify-center rounded-full textArea">
              <p className=" nxtText text-center font-bold text-xl text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <div className=" innerCircle bg-pink-500 h-[80px] w-[80px] rounded-full absolute bottom-0 right-0 text-white text-center text-3xl font-bold flex items-center justify-center">
              03
            </div>
            <h2 className=" frstText text-center font-bold text-4xl text-white mt-12 ">
              Develop
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
