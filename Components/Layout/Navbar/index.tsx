import React from "react";
import Cover from "../Cover";
import CinoPayLogo from "../../SVG/logoSvg";
import ButtonComponent from "../../Button";
import Link from "next/link";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <Cover>
      <div className={styles.over}>
        <div>
          <CinoPayLogo />
        </div>
        <div className={styles.links}>
          <Link href="#">
            <p>How it Works</p>
          </Link>
          <hr className={styles.hr} />
          <Link href="#">
            <p>Health Circle</p>
          </Link>
          <hr className={styles.hr} />
          <Link href="#">
            <p>About Us</p>
          </Link>
        </div>
        <div className={styles.buttons}>
          <ButtonComponent text="Register" background="" />
          <ButtonComponent text="Login" background="normal" />
        </div>
      </div>
    </Cover>
  );
};

export default Navbar;
