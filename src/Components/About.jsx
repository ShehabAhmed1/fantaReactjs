import React from "react";
import { useState } from "react";
import { Btn1componant } from "./Hero";
import juice from "../assets/images/juice.png";
import splash from "../assets/images/splash.png";
import { animate, inView, motion, transform } from "framer-motion";
import { fadeup } from "./Products";
const fadeleft = (delaytime) => {
  return {
    hidden: {
      x: -100,
      opacity: 0,
    },
    inview: {
      x: 0,
      opacity: 1,
      transition: {
        duraation: 0.5,
        delay: delaytime,
      },
    },
  };
};
const rotate = (delaytime) => {
  return {
    hidden: {
      rotate: 360,
      opacity: 0,
    },
    inview: {
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delaytime,
      },
    },
  };
};
function About() {
  return (
    <section className="about">
      <div className="main-container">
        <div className="about-content">
          <div className="box">
            <figure>
              <motion.img
                src={juice}
                alt=""
                variants={fadeleft(0.1)}
                initial="hidden"
                whileInView="inview"
              />
              <motion.img
                src={splash}
                alt=""
                variants={rotate(0.2)}
                initial="hidden"
                whileInView="inview"
              />
            </figure>
            <div className="box-details">
              <motion.h1
                variants={fadeup(0.2)}
                initial="hidden"
                whileInView="inview"
              >
                {" "}
                Refresh Your World with Fanta
              </motion.h1>
              <motion.p
                variants={fadeup(0.4)}
                initial="hidden"
                whileInView="inview"
              >
                {" "}
                Fanta brings a burst of vibrant flavors and effervescent fun to
                your day! Whether you're looking to quench your thirst with a
                zesty orange, tangy lemon, or one of our many other
                fruit-inspired flavors, Fanta is your go-to drink for a
                refreshing and exciting experience. Dive into the world of Fanta
                and let every sip spark your senses with its bold, bubbly, and
                refreshing taste!
              </motion.p>
              <Btn1componant value="buy now" />
            </div>
          </div>
          <motion.div
            className="about-footer"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 5,
              type: "spring",
              stiffness: 50,
              damping: 10,
            }}
          >
            <p>
              {" "}
              Every sip of Fanta turns up the fun—refresh your day with bold
              flavors and bubbly excitement!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
