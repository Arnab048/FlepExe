import React from "react";
import AnimatedText from "./AnimatedText";

const AboutUs = () => {
  return (
    <div className="">
      <div
        className="h-[35vh] w-full mt-20 mb-20  flex flex-col justify-center"
        style={{
          backgroundImage: "url('/Images/weBG.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div className="">
          <div className=" text-center">
            <AnimatedText text={"LET YOU KNOW"} />
          </div>
          <h2 className=" text-center text-6xl text-white font-semibold">
            Web solutions allows your business to increase productivity
          </h2>
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-12 gap-20 h-[50vh] mt-20 mb-80">
          <div className="col-span-6 flex justify-between gap-5">
            <div className="h-[100%] w-[100%] relative">
              <img
                src="/Images/aboutUs1.jpg"
                alt=""
                className="absolute top-[15%] rounded-md"
              />
              <div className=" bg-slate-700 absolute bottom-[0%] right-[-20%] rounded-md">
                <div className="flex justify-around gap-4 p-4">
                  <p className="text-white font-normal  text-xl pt-2">
                    We’re
                    <br />
                    delivering the
                    <br />
                    best customer
                    <br />
                    experience!
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[100%] w-[100%]">
              <img src="/Images/aboutUs2.jpg" alt="" className="rounded-md" />
            </div>
          </div>
          <div className="col-span-6">
            <AnimatedText text={"ABOUT US"} />
            <h1 className=" text-4xl my-5 font-semibold  text-slate-900">
              We are award winning web development agency.
            </h1>
            <div>
              <ul className="ticked-list">
                <li className="ticked-item text-lg  my-5 font-semibold  text-slate-500">
                  Remarkable to receive such a personalized touch.
                </li>
                <li className="ticked-item text-lg  my-5 font-semibold  text-slate-500">
                  Duis aute irure dolor in reprehenderit in voluptate.
                </li>
                <li className="ticked-item text-lg  my-5 font-semibold  text-slate-500">
                  I did not escape without a fight. Velit esse cillum dolore.
                </li>
              </ul>
            </div>
            <div className=" flex gap-5 mt-12">
              <img src="/Images/callCenter.png" alt="" className="w-[120px]" />
              <p className="text-black font-bold text-xl">
                Over 48,500 people work for us in more than 75 countries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
