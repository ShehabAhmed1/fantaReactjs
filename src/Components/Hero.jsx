import React from "react";
import fanta1 from "../assets/images/fanta1.png";
import fanta2 from "../assets/images/fanta2.png";
import fanta3 from "../assets/images/fanta3.png";
import Navigation from "./Navigation";
import { useState } from "react";
import { easeInOut, motion, AnimatePresence, color } from "framer-motion";

const slideright = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        type: "spring",
        stiffness: 200,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};
const Topproducts = [
  {
    img: fanta1,
    oldprice: 50,
    newprice: 40,
    catagory: "orange",
    header: "orange fanta",
    paragraph:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similiquedignissimos, voluptate non repudiandae nesciunt voluptates illumenim est quidem libero eveniet magni! Non id explicabo veritatisodit iste recusandae quis",
    bg: "#cf4f00",
  },
  {
    img: fanta2,
    oldprice: 80,
    newprice: 75,
    catagory: "Zero",
    header: "Zero fanta",
    paragraph:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similiquedignissimos, voluptate non repudiandae nesciunt voluptates illumenim est quidem libero eveniet magni! Non id explicabo veritatisodit iste recusandae quis",
    bg: "#8888",
  },
  {
    img: fanta3,
    oldprice: 100,
    newprice: 70,
    catagory: "cola",
    header: "coca cola",
    paragraph:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similiquedignissimos, voluptate non repudiandae nesciunt voluptates illumenim est quidem libero eveniet magni! Non id explicabo veritatisodit iste recusandae quis",
    bg: "#ac1a00",
  },
];
function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  function handleClick(index) {
    setActiveIndex(index);
  }

  return (
    <motion.section
      className="hero"
      catagory={Topproducts[activeIndex].catagory}
      initial={{ backgroundColor: Topproducts[activeIndex].bg }}
      animate={{ backgroundColor: Topproducts[activeIndex].bg }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      <div className="main-container">
        <div className="hero-content">
          <figure className="hero-banner">
            <AnimatePresence mode="wait">
              <motion.img
                key={Topproducts[activeIndex].catagory}
                variants={slideright(0.3)}
                initial="hidden"
                animate="show"
                exit="exit"
                transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                src={Topproducts[activeIndex].img}
                alt="fanta1"
              />
            </AnimatePresence>
          </figure>

          <div className="hero-details">
            <AnimatePresence mode="wait">
              {" "}
              <motion.h1
                key={Topproducts[activeIndex].catagory}
                variants={slideright(0.1)}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                {Topproducts[activeIndex].header}
              </motion.h1>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={Topproducts[activeIndex].catagory}
                variants={slideright(0.2)}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                {Topproducts[activeIndex].paragraph}
              </motion.p>
            </AnimatePresence>

            <Btn1componant value={"order new"} />
            <TopRecommendation
              Topproducts={Topproducts}
              onhandelClick={handleClick}
              activeIndex={activeIndex}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function TopRecommendation({ Topproducts, onhandelClick, activeIndex }) {
  return (
    <div className="topRec_">
      <h2>
        <span className="decoration"></span>Top Recommendation{" "}
        <span className="decoration"></span>
      </h2>
      <ul className="ulRecommendation">
        {Topproducts.map((p, index) => (
          <li
            key={index}
            catagory={p.catagory}
            onClick={() => onhandelClick(index)}
            className={activeIndex === index ? "active" : ""}
          >
            <figure>
              <img src={p.img} alt="" />
            </figure>
            <span className="oldprice">{p.oldprice}$</span>
            <span className="newprice">{p.newprice}$</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Btn1componant({ value }) {
  return (
    <motion.button
      className="mainbtn"
      whileHover="hover"
      variants={{
        hover: { backgroundColor: "#cf4f00" },
      }}
    >
      <motion.a
        href="#"
        variants={{
          hover: { color: "white" },
        }}
      >
        {value}
      </motion.a>
    </motion.button>
  );
}
export { Hero, Btn1componant };
