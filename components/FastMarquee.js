import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  const textItems = [
    "Web Development",
    "Software Development",
    "Digital Marketing",
    "Graphics Designing",
  ];

  return (
    <div style={{ width: "full", overflow: "hidden", marginBottom: "80px" }}>
      <Marquee className="bg-[#1F2732] py-10" speed={100}>
        {textItems.map((text, index) => (
          <div
            key={index}
            style={{
              marginRight: "80px",
            }}
            className="text-[#db4490] text-8xl font-bold"
          >
            | {text} |
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
