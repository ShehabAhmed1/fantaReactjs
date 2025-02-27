import React from "react";
import { Hero } from "./Components/Hero";
import { Products } from "./Components/Products";
import About from "./Components/About";
import Blogs from "./Components/Blogs";
import Questions from "./Components/Question";
import Footer from "./Components/Footer";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Hero />
      <Products />
      <About />
      <Blogs />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
