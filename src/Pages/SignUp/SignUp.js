import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import picture from "../../assets/Images/banner.jpg";

import Names from "./Names";
import Info from "./Info";
import Password from "./Password";
import axios from "axios";

const SignUp = () => {
  let navigate = useNavigate();
  const routeChange = () => {
  let path = "dashboard";
  navigate(path);
  }
  const [activeSection, setActiveSection] = useState(0);
  const [userInfo, setUserInfo] = useState({
    first_name: "",
    last_Name: "",
    phone_number: "",
    email: "",
    password: "",
  });

  const onDataChange = (e) => {
    const data = { ...userInfo };
    data[e.target.name] = e.target.value;
    setUserInfo(data);
  };

  const handleSignUpSubmit = () => {

    console.log(userInfo);
    routeChange();

    axios
      .post("https://test.nexisltd.com/signup", userInfo)
      .then(function (response) {
        console.log(response?.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  console.log(userInfo);

  return (
    <>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 justify-center items-center ">
        <div className="mt-20">
          <div className="p-20">
            <img class="object-cover" alt="" src={picture} />
          </div>
        </div>
        <div>
          <h1 className="font-bold font-sans  text-5xl mb-5 ">Sign Up Form</h1>
          {activeSection === 0 ? (
            <Names
              setActiveSection={setActiveSection}
              onDataChange={onDataChange}
            />
          ) : null}
          {activeSection === 1 ? (
            <Info
              setActiveSection={setActiveSection}
              onDataChange={onDataChange}
            />
          ) : null}
          {activeSection === 2 ? (
            <Password
              handleSignUpSubmit={handleSignUpSubmit}
              setActiveSection={setActiveSection}
              onDataChange={onDataChange}
            />
          ) : null}
        </div>
      </div>
    </>
    // <div>
    //   <img className="p-5" src={logo}></img>
    //   <div className="grid sm:grid-cols-1 lg:grid-cols-2 justify-center items-center ">
    //     <div className="mt-20">
    //       <div className="p-20">
    //         <img class="object-cover" src={picture} />
    //       </div>
    //     </div>
    //     <div>
    //       <form onSubmit={handleSubmit(onSubmit)}>
    //         <h1 className="font-bold font-sans  text-5xl mb-5 ">
    //           Sign Up Form
    //         </h1>
    //         <input
    //           name="firstName"
    //           {...register("firstName")}
    //           className="p-5 my-5 text-xs text-left border-b border-black"
    //           style={{ width: "368.5px" }}
    //           type="text"
    //           placeholder="Write First Name"
    //         />
    //         <input
    //           name="lastName"
    //           {...register("lastName")}
    //           className="p-5 my-5 text-xs text-left underline  min-w-full"
    //           type="text"
    //           placeholder="Write Last Name"
    //         />

    //         <Link to='/contact'>
    //           <button
    //             className="text-white bg-sky-500 hover:bg-white btn hover:text-black"
    //             type="submit"
    //           >
    //             Next Step →
    //           </button>
    //         </Link>

    //         <FontAwesomeIcon icon="fa-sharp fa-solid fa-arrow-right" />
    //       </form>
    //       <span>Don't have an account? </span>
    //       <Link to="login">Login Here!</Link>
    //     </div>
    //   </div>
    //   {personsName && <Contact personsName={personsName}></Contact>}
    // </div>
  );
};

export default SignUp;
