import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import { toggleGptSearchView } from "../redux/gptSearchSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44 " src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex items-center">
          <button
            onClick={handleGptSearchClick}
            className="bg-purple-800 px-8 m-4 py-2 text-white rounded-md"
          >
            GPT search
          </button>
          <img
            src={user?.photoURL}
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          <button
            onClick={handleSignOut}
            className="m-4 p-2 bg-red-800 px-4 text-white rounded-md"
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
