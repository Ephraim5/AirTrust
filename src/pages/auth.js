import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Import the useAuth hook
import logob from '../images/logob.png';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBdMhHFyqJw6S-WBHCcaf7KnByfLxB1LA0",
  authDomain: "airtrust-e4537.firebaseapp.com",
  projectId: "airtrust-e4537",
  storageBucket: "airtrust-e4537.firebasestorage.app",
  messagingSenderId: "13701024239",
  appId: "1:13701024239:web:f5001e2da6d82232ea4e1a",
  measurementId: "G-2L0319PZWX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggles between Login and Signup
  const navigate = useNavigate();
  const { login } = useAuth(); // Destructure login from useAuth context
  const auth = getAuth(app);
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Redirect user if logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // Store user data in localStorage for session persistence
        const userData = { email: firebaseUser.email };
        localStorage.setItem("user", JSON.stringify(userData));
        login(firebaseUser)
        // Redirect to service page if logged in
        navigate('/service');
      }
    });
    
    return () => unsubscribe();
  }, [auth, navigate]);

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      login(userCredential.user); // Set the user in context
      localStorage.setItem("user", JSON.stringify({ email })); // Save email in localStorage
      alert('Sign in successful!');
      navigate('/service'); // Redirect to the service page
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
      login(userCredential.user); // Set the user in context
      localStorage.setItem("user", JSON.stringify({ email: signupEmail })); // Save signup email in localStorage
      alert('Sign up successful!');
      navigate('/service'); // Redirect to the service page
    } catch (err) {
      setError(err.message);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userData = {
        username: user.displayName,
        email: user.email,
      };
      localStorage.setItem("user", JSON.stringify(userData)); // Save user data in localStorage
      login(user); // Set user in context
      
      // Redirect to the service screen
      navigate('/service');
    } catch (error) {
      console.error("Error during Google sign-in:", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen text-white auth bg-gradient-to-r from-slate-700 to-slate-800">
      <div className="w-full max-w-md p-8 space-y-6 text-slate-600 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold">{isLogin ? 'Login' : 'Sign Up'}</h2>
          <button
            onClick={toggleForm}
            className="text-sm text-blue-600 transition duration-300 hover:text-blue-800"
          >
            {isLogin ? 'Create an Account' : 'Already have an Account?'}
          </button>
        </div>

        {/* Google Login Button */}
        <button
          onClick={signInWithGoogle}
          className="flex items-center justify-center w-[250px] h-[50px] bg-white border border-gray-300 rounded-md shadow-md hover:bg-gray-100 transition-colors duration-200 ease-in-out"
        >
          <img src={logob} alt="Google logo" className="w-6 h-6 mr-3" />
          <span className="font-medium text-gray-700">Sign in with Google</span>
        </button>

        {/* Form */}
        {isLogin ? (
          <form onSubmit={handleSignIn}>
            {error && <p>{JSON.stringify(error)}</p>}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-3 mb-4 border rounded-lg outline-none"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-3 mb-4 border rounded-lg outline-none"
            />
            <button className="w-full py-3 text-white transition duration-300 bg-yellow-400 rounded-lg hover:bg-yellow-500" type="submit">
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignUp}>
            {error && <p>{JSON.stringify(error)}</p>}
            <input
              type="email"
              placeholder="Email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              className="w-full p-3 mb-4 border rounded-lg outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              className="w-full p-3 mb-4 border rounded-lg outline-none"
            />
            <button className="w-full py-3 text-white transition duration-300 bg-yellow-400 rounded-lg hover:bg-yellow-500" type='submit'>
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Auth;
