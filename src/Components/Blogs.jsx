import React from "react";
import { useState } from "react";
import { Btn1componant } from "./Hero";
import b1 from "../assets/images/b1.jpg";
import b2 from "../assets/images/b2.jpg";
import b3 from "../assets/images/b3.jpg";
import b4 from "../assets/images/b4.jpg";
import { motion } from "framer-motion";
import { fadeup } from "./Products";

function Blogs() {
  return (
    <section className="blog">
      <div className="main-container">
        <div className="section-titel">
          <h1>Blogs</h1>
        </div>
        <div className="blog-content">
          <BlogUnit img={b1} delaytime={0.1} />
          <BlogUnit img={b2} delaytime={0.2} />
          <BlogUnit img={b3} delaytime={0.3} />
          <BlogUnit img={b4} delaytime={0.4} />
        </div>
      </div>
    </section>
  );
}

function BlogUnit({ img, delaytime }) {
  return (
    <motion.div
      className="blog-unit"
      variants={fadeup(delaytime)}
      initial="hidden"
      whileInView="inview"
    >
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="blog-unit-details">
        <a href="#">Lorem ipsum dolor sit amet ...</a>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A sed,</p>
      </div>
    </motion.div>
  );
}
export default Blogs;
