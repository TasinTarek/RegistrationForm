import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import picture from "../../assets/Images/banner.jpg";
import logo from "../../assets/Images/logo.png";
const Login = () => {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/dashboard";
    navigate(path);
  };
const [userInfo, setUserInfo] = useState({
  email: "",
  password: ""
});

const onDataChange = (e) => {
  const data = { ...userInfo };
  data[e.target.name] = e.target.value;
  setUserInfo(data);
};

const handleLoginSubmit = () => {
  
  console.log(userInfo);
routeChange();
  axios
    .post("https://test.nexisltd.com/login", userInfo)
    .then(function (response) {
      console.log(response?.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

console.log(userInfo);
   
  return (
    <div>
      <img className="p-5" src={logo}></img>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 justify-center items-center ">
        <div className="mt-20">
          <div className="p-20">
            <img class="object-cover" src={picture} />
          </div>
        </div>
        <div>
          <h1 className="font-bold font-sans  text-5xl mb-5 ">Login!</h1>
          <div>
            <input
              onChange={onDataChange}
              name="email"
              className="border-b p-5 border-black w-full my-5"
              placeholder="abc@xyz.com"
              type="email"
            />
          </div>
          <div>
            <input
              onChange={onDataChange}
              name="password"
              className="border-b border-black p-5  w-full my-5"
              placeholder="Write Password"
              type="password"
            />

            <label className="label">
              <p>Your password must be 8 characters.</p>
            </label>
          </div>
          <button
            onClick={handleLoginSubmit}
            className=" my-5 mx-5 w-fit text-white bg-sky-500 hover:bg-white btn hover:text-black"
          >
            Login!
          </button>
          <label>
            <span>
              Don't have an account?
              <Link to='/'>Sign Up!</Link>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
