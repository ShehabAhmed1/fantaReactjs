import React from "react";
import { useState } from "react";
import logo from "../assets/images/logo.png";
import payment from "../assets/images/credit-cards.webp";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeup } from "./Products";

const footerData = {
  links: ["Home", "About", " Contact us", "Privacy Policy"],
  follow: {
    icons: [
      <FaFacebook />,
      <AiFillInstagram />,
      <FaTelegramPlane />,
      <FaGoogle />,
    ],
    paymentimg: payment,
  },
  right: "Copyright © 2024. All Rights Reserved to Shehab Ahmed",
};

function Footer() {
  return (
    <footer className="footer">
      <motion.div
        className="main-container"
        variants={fadeup(0.2)}
        initial="hidden"
        whileInView="inview"
      >
        <div className="footer-content">
          <Contact />
          <Links />
          <Follow_Payment />
        </div>
      </motion.div>
      <Right />
    </footer>
  );
}

function Contact() {
  return (
    <div className="contact">
      <figure>
        <img src={logo} alt="" />
      </figure>
      <p>
        {" "}
        <FaPhone />
        <span> +1 (123) 456-7890</span>
      </p>
      <p>
        <FaMapLocation /> <a href="#">Noida, Uttar Pradesh</a>
      </p>
    </div>
  );
}
function Links() {
  return (
    <div className="links">
      <h1>Quick Links</h1>
      <ul>
        {footerData["links"].map((li, index) => {
          return (
            <li key={index}>
              <a href="#">{li}</a>
            </li>
          );
        })}{" "}
      </ul>
    </div>
  );
}
function Follow_Payment() {
  return (
    <div className="follow">
      <h1>Follow us</h1>
      <ul className="social-icons">
        {footerData["follow"]["icons"].map((li, index) => {
          return (
            <li key={index}>
              <a href="#">{li}</a>
            </li>
          );
        })}{" "}
      </ul>
      <p>payment method</p>
      <figure>
        <img src={footerData["follow"]["paymentimg"]} alt="" />
      </figure>
    </div>
  );
}
function Right() {
  return (
    <div className="right">
      <h1>{footerData["right"]}</h1>
    </div>
  );
}

export default Footer;
