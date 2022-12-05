import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import picture from "../../assets/Images/banner.jpg";

const Names = ({ setActiveSection, onDataChange }) => {
  return (
    <div>
      {/* <img className="p-5" alt="" src={logo}></img> */}
      {/* <div className="grid sm:grid-cols-1 lg:grid-cols-2 justify-center items-center ">
        <div className="mt-20">
          <div className="p-20">
            <img class="object-cover" alt="" src={picture} />
          </div>
        </div> */}
      <div>
        <div>
          <input
            name="first_name"
            className="p-5 my-5 text-xs text-left border-b border-black min-w-full"
            type="text"
            placeholder="Write First Name"
            onChange={onDataChange}
          />
          <input
            name="last_Name"
            className="p-5 my-5 text-xs text-left border-b border-black min-w-full  "
            type="text"
            placeholder="Write Last Name"
            onChange={onDataChange}
          />

          <button
            className="text-white bg-sky-500 hover:bg-white btn hover:text-black"
            onClick={() => setActiveSection(1)}
          >
            Next Step →
          </button>

          <FontAwesomeIcon icon="fa-sharp fa-solid fa-arrow-right" />
        </div>
        <span>Already have an account? </span>
        <Link to="login">Login Here!</Link>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Names;
