import React, { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../utils/firebase";
import { provider } from "../utils/firebase";
import { BACKGROUND_IMAGE } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef();
  const email = useRef();
  const password = useRef();

  //Thiss method will work if in firebase we provided signin method as email/password

  // const handleSignIn = () => {
  //   const errorMessage = validate(
  //     email?.current?.value,
  //     password?.current?.value,
  //     name?.current?.value
  //   );
  //   setErrorMessage(errorMessage);
  //   if (errorMessage) return;

  //   if (isSignIn) {
  //     createUserWithEmailAndPassword(
  //       auth,
  //       email?.current?.value,
  //       password?.current?.value
  //     )
  //       .then((userCredential) => {
  //         // Signed up
  //         const user = userCredential.user;
  //         console.log(user);
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         setErrorMessage(errorCode - errorMessage);
  //       });
  //   } else {
  //     signInWithEmailAndPassword(auth, email, password)
  //       .then((userCredential) => {
  //         // Signed in
  //         const user = userCredential.user;
  //         console.log(user);
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         setErrorMessage(errorCode + " " + errorMessage);
  //       });
  //   }
  // };

  //Sigin method by google

  const handleAuth = () => {
    const message = validate(
      email?.current?.value,
      password?.current?.value,
      name?.current?.value
    );
    setErrorMessage(message);
    if (message) return;

    if (message === null) {
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          // The email of the user's account used.
          const email = error.customData.email;
          console.log(email);
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          console.log(credential);
          // ...
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BACKGROUND_IMAGE} alt="background" />
      </div>
      <form
        onClick={(e) => e.preventDefault()}
        className="p-10 w-3/12 absolute my-36 mx-auto right-0 left-0 bg-black py-20 text-white bg-opacity-80 rounded-lg"
      >
        <h1 className="text-3xl py-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full name"
            className="p-4 my-2 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email address"
          className="p-4 my-2 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full  bg-gray-700"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          onClick={handleAuth}
          className="p-4 my-6 bg-red-900 w-full rounded-lg"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 cursor-pointer" onClick={toggleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already registerd? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
