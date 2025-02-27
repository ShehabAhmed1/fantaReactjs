import React from "react";
import { useState } from "react";
import { Btn1componant } from "./Hero";
import fanta1 from "../assets/images/fanta1.png";
import fanta2 from "../assets/images/fanta2.png";
import fanta3 from "../assets/images/fanta3.png";
import { animate, delay, motion, transform } from "framer-motion";
const products = [
  {
    img: fanta1,
    oldprice: 50,
    newprice: 40,
    delaytime: 0.2,
    catagory: "orange",
    header: "orange fanta",
    paragraph:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similiquedignissimos",
  },
  {
    img: fanta2,
    oldprice: 80,
    newprice: 75,
    delaytime: 0.4,
    catagory: "Zero",
    header: "Zero fanta",
    paragraph:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similiquedignissimos",
  },
  {
    img: fanta3,
    oldprice: 100,
    newprice: 70,
    delaytime: 0.6,
    catagory: "cola",
    header: "coca cola",
    paragraph:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similiquedignissimos",
  },
];
let fadeup = (delaytime) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    inview: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delaytime,
      },
    },
  };
};
function Products() {
  return (
    <motion.section className="products" whileInView={"inview"}>
      <div className="main-container">
        <motion.div
          className="section-titel"
          whileInView="inview"
          variants={fadeup(0.2)}
          initial="hidden"
        >
          <h1>our products</h1>
        </motion.div>
        <div className="products-content">
          {products.map((p, index) => {
            return (
              <Product index={index} delaytime={p.delaytime} key={index} />
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

function Product({ index, delaytime }) {
  let product = products[index];
  return (
    <motion.div
      className="product"
      whileHover="hover"
      variants={fadeup(delaytime)}
      initial="hidden"
      whileInView="inview"
    >
      <motion.figure
        initial={{ rotate: 0, scale: 1, transition: { duration: 0.25 } }}
        variants={{
          hover: {
            rotate: 20,
            scale: 1.1,
            transition: { duration: 0.25 },
          },
        }}
      >
        <img src={product.img} alt="" />
      </motion.figure>
      <div className="p-details">
        <h1>{product.header}</h1>
        <p>{product.paragraph}</p>
        <Btn1componant value={"Buy"} />
      </div>
    </motion.div>
  );
}

export { fadeup, Products };
