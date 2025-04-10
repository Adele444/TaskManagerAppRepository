import { auth, provider, signInWithPopup, createUserWithEmailAndPassword,
  signInWithEmailAndPassword } from "./firebase";
import './Login.css';
import React, { useState } from 'react';


/** Login Component,it handles Google Sign-In, Email Signup, and Email Login. */


function Login({ setUser }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false); // toggle between login and sign-up

  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      setUser(result.user);
    });
    
  };

  const handleEmailAuth = (e) => {
    e.preventDefault();
    if (isSignUp) {
      // Sign Up Flow
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setUser(userCredential.user);
        })
        .catch((error) => alert(error.message));
    } else {
      // Login Flow
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setUser(userCredential.user);
        })
        .catch((error) => alert(error.message));
    }
  };



  return (
    <div className="login and signup wrapper">
      <h1 className="logintitle">Task Manager List</h1>

      <form
        onSubmit={handleEmailAuth}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm space-y-4"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded-md"
        />

        <button
          type="submit"
          className="loginsignup"/**w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition */
        >
          {isSignUp ? "Sign Up with Email" : "Log In with Email"}
        </button>

        <p className="text-sm text-center text-gray-600">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-600 cursor-pointer underline"
          >
            {isSignUp ? "Login" : "Sign Up"}
          </span>
        </p>
      </form>

      <div className="my-4 text-white-600 flex flex-col items-center justify-center text-2xl" >or</div>

      <button
        onClick={signIn} /**changed from signInWithGoogle to signIn */
        className="flex items-center px-6 py-3 bg-white shadow-lg border rounded-lg hover:shadow-xl transition"
      >
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          alt="Google"
          className="w-6 h-6 mr-3"
        />
        <span className="text-gray-700 font-medium">Sign in with Google</span>
      </button>
    </div>
  );
}

  

export default Login;

/**   return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={signIn}
      >
        Sign in with Google
      </button>
    </div>
  );
} 
  
most recent return function part
return (
    <div className="wrapper">
      <h1 className="logintitle">Task Manager</h1>
        
      <button className="signIn" text-white px-4 py-2 rounded
        onClick={signIn}>
        Sign in with Google
      </button>
      
    </div>
  );
}
*/