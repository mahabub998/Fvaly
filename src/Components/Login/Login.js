import React, { useRef } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useContext, useState } from "react";
import { UserContext } from "./../../App";
import { useHistory, useLocation } from "react-router-dom";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import CreateUser from "./Email/CreateUser";
import SignInUser from "./Email/SingInUser";
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
      {/* google login */}
    

      {/* email sing in*/}

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

// const Login = () => {
//   let history = useHistory();
// 	let location = useLocation();
// 	const provider = new firebase.auth.GoogleAuthProvider();
// 	let { from } = location.state || { from: { pathname: '/' } };
// 	const [ loggedInInfo, setLoggedInInfo ] = useState({ name: '', email: '', isValidUser: false });
// 	const [ isNewUser, setIsNewUser ] = useState(false);
// 	const [logInInfo, setLogInInfo] = useState({ email: '', password: '' });
// 	const [error, setError] = useState('');
// 	const [success, setSuccess] = useState('');

// 	if (firebase.apps.length === 0) {
// 		firebase.initializeApp(firebaseConfig);
// 	}
// 	const [ user, setUser ] = useContext(UserContext);

// 	const updateUser = (name) => {
// 		let user = firebase.auth().currentUser;
// 		user
// 			.updateProfile({
// 				displayName: name
// 			})
// 			.then(function() {
// 				console.log('updated successfully');
// 			})
// 			.catch(function(error) {
// 				console.log('error happened');
// 			});
// 	};

// 	//google login
// 	const handleGoogleLogin = () => {
// 		firebase
// 			.auth()
// 			.signInWithPopup(provider)
// 			.then((result) => {
// 				var credential = result.credential;
// 				var token = credential.accessToken;

// 				const userInfo = result.user;
// 				const newUser = { ...user };
// 				console.log('successful', userInfo);
// 				newUser.name = userInfo.displayName;
// 				newUser.email = userInfo.email;
// 				newUser.isValidUser = true;
// 				setUser(newUser);
// 				setSuccess('You are Successfully LoggedIn');
// 				setError('');
// 				history.replace(from);
// 			})
// 			.catch((error) => {
// 				var errorCode = error.code;
// 				var errorMessage = error.message;

// 				var email = error.email;

// 				var credential = error.credential;
// 				setSuccess('');
// 				setError(errorMessage);
// 			});
// 		// event.preventDefault();
// 	};

// 	//create new user
// 	const handleSubmit = (event) => {
// 		console.log('submitting', user.email, user.password);
// 		if (user.isValidUser) {
// 			firebase
// 				.auth()
// 				.createUserWithEmailAndPassword(user.email, user.password)
// 				.then((userCredential) => {
// 					const userinfo = userCredential.user;

// 					const newUser = { ...user };
// 					newUser.isValidUser = true;
// 					setUser(newUser);
// 					updateUser(user.name);
// 					setSuccess('You are Successfully LoggedIn');
// 					setError('');
// 					history.replace(from);
// 				})
// 				.catch((error) => {
// 					var errorCode = error.code;
// 					var errorMessage = error.message;
// 					setSuccess('');
// 					setError(errorMessage);
// 					// ..
// 				});
// 			// console.log("user is ready to submit");
// 		}
// 		event.preventDefault();
// 	};

// 	// handle login
// 	const handleLogIn = (event) => {
// 		firebase
// 			.auth()
// 			.signInWithEmailAndPassword(logInInfo.email, logInInfo.password)
// 			.then((userCredential) => {
// 				var user = userCredential.user;
// 				console.log('successful', user);
// 				const { displayName, email } = user;
// 				const newUser = { ...user };
// 				newUser.name = displayName;
// 				newUser.email = email;
// 				newUser.isValidUser = true;
// 				setUser(newUser);
// 				setSuccess('You are Successfully LoggedIn');
// 				setError('');
// 				history.replace(from);
// 			})
// 			.catch((error) => {
// 				var errorCode = error.code;
// 				var errorMessage = error.message;
// 				setSuccess('');
// 				setError(errorMessage);
// 			});
// 		// console.log(logInInfo.email,logInInfo.password);
// 		event.preventDefault();
// 	};

// 	return (
// 		<div className="d-flex container custom-container justify-content-center align-items-center">

// 			<div className="inner-container">
// 				<h3 className="text-danger">{ error}</h3>
// 				<h3 className="text-success">{ success}</h3>
// 				{isNewUser ? (
// 					<CreateUser
// 						handleSubmit={handleSubmit}
// 						setIsNewUser={setIsNewUser}
// 						setLoggedInInfo={setLoggedInInfo}
// 					/>
// 				) : (
// 					<SignInUser
// 						handleLogIn={handleLogIn}
// 						setIsNewUser={setIsNewUser}
// 						logInInfo={logInInfo}
// 						setLogInInfo={setLogInInfo}
// 					/>
// 				)}
// 				<p className="text-center">or</p>
// 				<div className="mt-1 button-container">
// 					<button onClick={handleGoogleLogin} className="login-button">
// 						<span>
// 							<img
// 								className="text-left"
// 								src="https://i.ibb.co/TgdQSf5/Group-573.png"
// 								alt="Group-573"
// 								border="0"
// 							/>
// 						</span>
// 						continue with google
// 					</button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Login;
