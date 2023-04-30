import React from "react";
import Cover from "../Cover";
import styles from "./styles.module.css";
import CinoPayCapitalLogo from "../../SVG/cinoPayCapitalLogo";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
const Footer = () => {
  return (
    <div className={styles.footerBg}>
      <Cover>
        <div>
          <div className={styles.footerContent}>
            <div className={styles.logo}>
              <CinoPayCapitalLogo />
              <p>Pay your healthcare bills in affordable Installments.</p>
            </div>
            <div className={styles.company}>
              <h1>Company</h1>
              <div>
                <Link href="#">
                  <p>About Us</p>
                </Link>
                <Link href="#">
                  <p>Privacy Policy</p>
                </Link>
                <Link href="#">
                  <p>Our Partners</p>
                </Link>
              </div>
            </div>
            <div className={styles.product}>
              <h1>Product</h1>
              <div>
                <Link href="#">
                  <p>For Individuals</p>
                </Link>
                <Link href="#">
                  <p>For Health Providers</p>
                </Link>
              </div>
            </div>
            <div className={styles.help}>
              <h1>Get Help</h1>
              <div>
                <Link href="#">
                  <p>FAQs</p>
                </Link>
                <Link href="#">
                  <p>How it works</p>
                </Link>
                <Link href="#">
                  <p>Contact Us</p>
                </Link>
              </div>
            </div>
            <div className={styles.follow}>
              <h1>Follow Us</h1>
              <div className={styles.footerSocials}>
                <div>
                  <FaFacebookF />
                </div>
                <div>
                  <FaTwitter />
                </div>
                <div>
                  <FiInstagram />
                </div>
                <div>
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerbtm}>
          <p>Copyright © 2023, Cinopay. All rights reserved.</p>
        </div>
      </Cover>
    </div>
  );
};

export default Footer;
