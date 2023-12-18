import Link from "next/link";
import React from "react";

const PrimaryButton = (props) => {
  const { text, href } = props;
  return (
    <Link
      href={href}
      className="w-fit text-3xl font-bold text-white bg-pink-500 py-2 px-4 buttonHover rounded-md "
    >
      {text}
    </Link>
  );
};

export default PrimaryButton;
