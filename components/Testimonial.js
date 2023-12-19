import { Icon } from "@iconify/react";
import Image from "next/image";
import AnimatedText from "./AnimatedText";

const Testimonial = () => {
  const testimonials = [
    {
      imgPath: "/Images/testimonial-avater-1.jpg",
      name: "Zachary Holden",
      designation: "CEO & Founder",
      quote:
        "We've used web design agency for the last five years. We can't understand how we've been living without web design agency. Thank You!",
    },
    {
      imgPath: "/Images/testimonial-avater-2.jpg",
      name: "Daniel Johann",
      designation: "Satisfied customer",
      quote:
        "I am so pleased with this product. Absolutely wonderful! You won't regret it. It's really wonderful. Definitely worth the investment.",
    },
    {
      imgPath: "/Images/testimonial-avater-3.jpg",
      name: "Alannah Jeffcott",
      designation: "Business Consultant",
      quote:
        "I'd be lost without web design agency. Web design agency is the most valuable business resource we have EVER purchased.",
    },
  ];

  return (
    <div className="container">
      {/* heading  */}
      <div className=" text-center pt-[120px] pb-20">
        <AnimatedText text={"OUR TESTIMONIALS"} />
        <h2 className=" font-semibold text-5xl">What They’re Saying?</h2>
      </div>
      {/* testimonials */}
      <div className="mt-30 grid md:grid-cols-2 xl:grid-cols-3 gap-10 mb-[120px]">
        {testimonials.map((testimonial) => (
          <div>
            <div className="flex space-x-5">
              <Image
                src={testimonial.imgPath}
                className="rounded-xl"
                width={100}
                height={140}
              />
              <div className="mt-5">
                <h3 className="font-bold text-xl">{testimonial.name}</h3>
                <p className="text-gray-400">{testimonial.designation}</p>
              </div>
            </div>
            <div className="relative ">
              <span className="absolute right-10 top-3 z-50 text-pink-500 text-4xl ">
                <Icon icon="fa-solid:quote-left" />
              </span>
              <div className="testimonial-clip-path  bg-white ml-5 -mt-10 rounded-b-lg rounded-r-lg border-b-4 border-pink-500">
                <div className="min-h-[150px]">
                  <p className="pt-20 px-9 pb-4 leading-7 text-gray-700 ">
                    {testimonial.quote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
