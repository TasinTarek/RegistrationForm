import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../assets/Images/logo.png";
import picture from "../../assets/Images/banner.jpg";

const Info = ({ setActiveSection, onDataChange }) => {
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
            name="phone_number"
            className="p-5 my-5 text-lg text-left border-b border-black min-w-full  min-w-full "
            type="text"
            placeholder="+880 1*********"
            onChange={onDataChange}
          />
          <div>
            <input
              name="email"
              className="p-5 my-5 text-lg text-left border-b border-black min-w-full  min-w-full"
              type="text"
              placeholder="Write Email Address"
              onChange={onDataChange}
            />
            <label className="label">
              {/* {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )} */}
            </label>
          </div>

          <button
            //   onClick={backward}
            className="btn my-5 mx-5 text-black bg-white hover:bg-sky-500  hover:text-white w-32 "
            onClick={() => setActiveSection(0)}
          >
            Back
          </button>

          <button
            className=" my-5 mx-5 text-white bg-sky-500 hover:bg-white btn hover:text-black w-32"
            onClick={() => setActiveSection(2)}
          >
            Next Step →
          </button>

          <FontAwesomeIcon icon="fa-sharp fa-solid fa-arrow-right" />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Info;
