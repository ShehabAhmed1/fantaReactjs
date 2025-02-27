import { li } from "framer-motion/client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeup } from "./Products";
const QuestionsData = [
  {
    question: "What is Fanta?",
    answer:
      "Fanta is a popular fruit-flavored carbonated soft drink created by The Coca-Cola Company.",
  },
  {
    question: "What flavors does Fanta offer?",
    answer:
      "Fanta offers a variety of flavors including orange, grape, pineapple, and more!",
  },
  {
    question: "    Is Fanta gluten-free?",
    answer:
      "Yes, Fanta is gluten-free, making it suitable for those with gluten intolerance.",
  },
  {
    question: "How many calories are in a can of Fanta?",
    answer: "A 12 oz can of Fanta Orange contains about 160 calories.",
  },
];

function Questions() {
  return (
    <section className="questions">
      <div className="main-container">
        <div className="section-titel">
          <motion.h1
            variants={fadeup(0.2)}
            initial="hidden"
            whileInView="inview"
          >
            Frequently Asked Questions
          </motion.h1>
        </div>
        <motion.div
          className="questions-content"
          variants={fadeup(0.4)}
          initial="hidden"
          whileInView="inview"
        >
          <Questionslist />
        </motion.div>
      </div>
    </section>
  );
}

function Questionslist() {
  return (
    <ul className="all-questions">
      {QuestionsData.map((q, index) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
          <li onClick={() => setIsOpen(!isOpen)} key={index}>
            <h1 className="question">
              {q.question} <span className="icon">{isOpen ? "-" : "+"}</span>
            </h1>
            {isOpen && <p className="answer">{q.answer}</p>}
          </li>
        );
      })}
    </ul>
  );
}
export default Questions;
