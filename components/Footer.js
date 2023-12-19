import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="container py-20">
      <div className="grid grid-cols-12 py-10 border-b-2 border-b-slate-400">
        <div className="col-span-4">
          <div className="flex justify-center">
            <div className="flex flex-col justify-between gap-10">
              <img src="/Images/logo.jpg" alt="" className="w-[60%]" />
              <p className="text-xl text-slate-300 font-normal ">
                Subscribe to our newsletter
                <br />
                to receive updates on the
                <br />
                latest news!
              </p>
              <div className="flex gap-6">
                <a href="" className=" socialIcons">
                  <Icon icon="ri:facebook-fill" color="white" />
                </a>
                <a href="" className=" socialIcons">
                  <Icon icon="icon-park-twotone:big-x" color="white" />
                </a>
                <a href="" className=" socialIcons">
                  <Icon icon="mdi:youtube" color="white" />
                </a>
                <a href="" className=" socialIcons">
                  <Icon icon="basil:linkedin-solid" color="white" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex justify-center">
            <div className="flex flex-col justify-between gap-10">
              <h1 className="text-3xl text-white font-bold ">Newsletter</h1>
              <p className="text-xl text-slate-300 font-normal ">
                Subscribe to our newsletter
                <br />
                to receive updates on the
                <br />
                latest news!
              </p>
              <form action="#">
                <div className="relative">
                  <input
                    className="py-2 pl-7 pr-12 bg-[#4C525B] focus-visible:outline-pink-500 text-gray-300"
                    type="email"
                    name=""
                    id=""
                    placeholder="Subscribe with us"
                  />
                  <a href="">
                    <Icon
                      className="absolute top-3 right-5 text-white"
                      icon="fa:paper-plane"
                    />
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex justify-center">
            <div className="flex flex-col justify-between gap-10">
              <h1 className="text-3xl text-white font-bold ">Contacts</h1>
              <div className="flex gap-4">
                <p className="text-6xl">
                  <Icon
                    icon="material-symbols:call-log-outline"
                    color="#db4490"
                  />
                </p>
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl text-white font-bold ">Contact Us</h1>
                  <p className="text-lg  text-white font-normal ">
                    (+44) 123-456-789
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <p className="text-6xl">
                  <Icon icon="typcn:mail" color="#db4490" />
                </p>
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl text-white font-bold ">Mail Us</h1>
                  <p className="text-lg  text-white font-normal ">
                    info@yourdomain.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-4">
        <p className="text-center text-white font-medium text-base ">
          © 2023 All rights reserved by{" "}
          <span className="text-[#db4490]">
            <a href="#">FlepExe</a>
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
