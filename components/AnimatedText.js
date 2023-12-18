import React from "react";
import styles from "./AnimatedText.module.css";

const AnimatedText = (props) => {
  const { text } = props;
  return <div className={styles.test}>{text}</div>;
};

export default AnimatedText;
