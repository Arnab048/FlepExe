import React from "react";
import AnimatedText from "./AnimatedText";
import Card from "./Card";
import { Icon } from "@iconify/react";
import Image from "next/image";

const Services = () => {
  const cardInfos = [
    {
      icon: <Icon icon="grommet-icons:cloud-software" color="white" />,
      header: "Web Designing",
      text: "We offers plan and assemble managing for you from startups to the last creation or closing creation.",
      imagePath: "/Images/services1.png",
      readMoreLinkText: "Read More",
    },
    {
      icon: <Icon icon="icon-park-solid:web-page" color="white" />,
      header: "Web Development",
      text: "We offers plan and assemble managing for you from startups to the last creation or closing creation.",
      imagePath: "/Images/services1.png",
      readMoreLinkText: "Read More",
    },
    {
      icon: <Icon icon="icon-park-outline:computer" color="white" />,
      header: "Web Application",
      text: "We offers plan and assemble managing for you from startups to the last creation or closing creation.",
      imagePath: "/Images/services1.png",
      readMoreLinkText: "Read More",
    },
  ];

  return (
    <div className=" mt-20">
      <div className="flex justify-center">
        <AnimatedText text={"WHAT WE DO"} />
      </div>
      <h1 className=" text-4xl mt-5 font-semibold text-center text-slate-700">
        Services That Help You Grow.
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-20 pb-10">
        {cardInfos.map((card) => (
          <Card
            icon={card.icon}
            header={card.header}
            text={card.text}
            imagePath={card.imagePath}
            readMoreLinkText={card.readMoreLinkText}
          />
        ))}
      </div>
      <div className="grid grid-cols-12 gap-20 h-[50vh] mt-40 mb-80">
        <div className="col-span-6 flex justify-between gap-5">
          <div className="h-[100%] w-[100%] relative">
            <img
              src="/Images/services4.jpg"
              alt=""
              className="absolute top-[-15%] rounded-md"
            />
            <div className=" bg-pink-500 absolute bottom-[0%] right-[0%] ">
              <div className="flex justify-around gap-4 p-4">
                <h1 className=" text-white font-bold text-7xl">18</h1>
                <p className="text-white font-semibold text-xl pt-2">
                  Years of
                  <br />
                  Experience
                </p>
              </div>
            </div>
          </div>
          <div className="h-[100%] w-[100%]">
            <img src="/Images/services5.jpg" alt="" className="rounded-md" />
          </div>
        </div>
        <div className="col-span-6">
          <AnimatedText text={"WHO WE ARE"} />
          <h1 className=" text-4xl my-5 font-semibold  text-slate-900">
            We offer the best design and development services!
          </h1>
          <p className=" text-lg  my-5 font-semibold  text-slate-600">
            Our objective is to offer a high-quality service and a dependable
            source of income to our investors while simultaneously minimizing
            any potential risks and automating and simplifying the
            relationships.
          </p>
          <div className="flex justify-around mt-10">
            <div className=" border-t-4 border-t-pink-500 p-8 relative shads">
              <img
                src="/Images/CEO.jpg"
                alt=""
                className="rounded-full absolute left-[-45px] top-10 "
              />
              <img src="/Images/sign.png" alt="" className="mb-2" />
              <h3 className="text-2xl font-semibold mb-2">Mita Walker</h3>
              <h5 className="text-base text-slate-600 font-xl">CEO, FlepExe</h5>
            </div>
            <div>
              <ul className="ticked-list">
                <li className="ticked-item text-lg  my-5 font-semibold  text-black">
                  Provide Web Design & Development
                </li>
                <li className="ticked-item text-lg  my-5 font-semibold  text-black">
                  We Provide Logo Design & Copywriting
                </li>
                <li className="ticked-item text-lg  my-5 font-semibold  text-black">
                  Best Website Support & Consultations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
