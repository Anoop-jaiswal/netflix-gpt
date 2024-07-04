import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_medium.jpg"
          alt="logo"
        />
      </div>
      <form className="p-10 w-3/12 absolute my-36 mx-auto right-0 left-0 bg-black py-20 text-white bg-opacity-80">
        <h1 className="text-3xl py-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full name"
            className="p-4 my-2 w-full bg-gray-700"
          />
        )}
        <input
          type="email"
          placeholder="Email address"
          className="p-4 my-2 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full  bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-900 w-full rounded-lg">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 cursor-pointer" onClick={handleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already registerd? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
