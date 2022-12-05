import React from "react";


const Password = ({ setActiveSection, onDataChange, handleSignUpSubmit }) => {
  
  return (
    <div>
      {/* <img className="p-5" src={logo}></img>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 justify-center items-center ">
          <div className="mt-20">
            <div className="p-20">
              <img class="object-cover" src={picture} />
            </div>
          </div> */}
      <div>
        <div>
          <div>
            <input
              className="p-5 up-5 my-5 text-lg text-left border-b border-black   min-w-full"
              placeholder="Write Password"
              name="password"
              type="password"
              onChange={onDataChange}
            />
            <lable>
              <span>Password Must be 8 characters</span>
            </lable>
          </div>

          <button
            className="btn my-5 mx-5 w-32
                text-white
                bg-sky-500
                hover:bg-white
                hover:text-black"
            onClick={() => setActiveSection(1)}
          >
            Back
          </button>
          <button
            className="btn my-5 mx-5 w-32 
                text-white
                bg-sky-500
                hover:bg-white
                
                hover:text-black"
            onClick={handleSignUpSubmit}
          >
            Sign Up!
          </button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Password;
