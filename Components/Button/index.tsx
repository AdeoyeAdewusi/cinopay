import React from "react";
import styles from "./styles.module.css";

const ButtonComponent = ({
  text,

  background,
}: {
  text: any;

  background: any;
}) => {
  return (
    <div className={background === "normal" ? styles.button : styles.buttonii}>
      {text}
    </div>
  );
};

export default ButtonComponent;
