import React, { useRef } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useContext, useState } from "react";
import { UserContext } from "./../../App";
import { useHistory, useLocation } from "react-router-dom";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import Email from "./Email/Email";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSingIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { email, displayName } = result.user;
        const singedInUser = { name: displayName, email };
        setLoggedInUser(singedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email);
      });
  };

  return (
    <div className="mt-5 w-100 h-100 ">
      <Email />
      {/* email sing in*/}

      {/* google login */}
      <div>
        <div className="text-center">
          <button className="button-style" onClick={handleGoogleSingIn}>
            <FcGoogle> </FcGoogle> sing in google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
