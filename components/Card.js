import Image from "next/image";
import PrimaryButton from "./primaryButton";
import styles from "./Card.module.css";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Card = (props) => {
  const { icon, header, text, imagePath, readMoreLinkText } = props;
  return (
    <div
      className={styles.main_container}
      style={{
        backgroundImage: `url(${imagePath})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "50vh",
      }}
    >
      <div className={styles.iconHome}>
        <p className="font-bold text-5xl relative left-4 top-5">{icon}</p>
      </div>
      <div className=" text-white font-extrabold text-6xl text-center flex justify-center items-center h-[100%]">
        {header}
      </div>
      <div className={styles.overlay}>
        <div className="flex flex-col justify-between gap-10 ">
          <h1 className="text-4xl  font-semibold">{header}</h1>
          <h2 className="text-xl  font-normal text-slate-500">{text}</h2>
          <Link
            href={"#projects"}
            className="navButtonHover text-2xl font-semibold text-black"
          >
            {readMoreLinkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
