//import React from "react";
import logo from "../assets/images/logo.png";
import { FaBars } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";
const Navlinks = [
  {
    id: 1,
    titel: "Home",
    link: "#",
  },
  {
    id: 2,
    titel: "Categories",
    link: "#",
  },
  {
    id: 3,
    titel: "Blog",
    link: "#",
  },
  {
    id: 4,
    titel: "About",
    link: "#",
  },
  {
    id: 5,
    titel: "Contact",
    link: "#",
  },
];

function Navigation() {
  return (
    <nav>
      <div className="main-container">
        <div className="nav-content">
          <figure>
            <img src={logo} alt="logo" />
          </figure>
          <LinksComponant ulclassName={"main-ul"} />
          <div className="mobile-bar" onClick={showsidebar}>
            {" "}
            <FaBars />
            <FaUser />{" "}
          </div>
        </div>
      </div>
      <div className="side-bar">
        <IoClose className="closeSider" onClick={hiddesidebar} />
        <LinksComponant ulclassName={"side-ul"} />
      </div>
    </nav>
  );
}

function LinksComponant({ ulclassName }) {
  return (
    <ul className={ulclassName}>
      {Navlinks.map((obj) => {
        return (
          <a href={obj.link} key={obj.id}>
            <li>{obj.titel}</li>
          </a>
        );
      })}{" "}
    </ul>
  );
}
LinksComponant.propTypes = {
  ulclassName: PropTypes.string,
};

function showsidebar() {
  let $sidebar = document.querySelector(".side-bar");
  $sidebar.classList.add("active");
}
function hiddesidebar() {
  let $sidebar = document.querySelector(".side-bar");
  $sidebar.classList.remove("active");
}
export default Navigation;
