// ForgotPassword.js
import React, { useState } from 'react';
import { sendPasswordResetEmail, getAuth } from 'firebase/auth';
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

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth(app);

    const handlePasswordReset = async (e) => {
        e.preventDefault();

        try {
            await sendPasswordResetEmail(auth, email);
            setMessage('Password reset has been sent to your email , check your email and verify!');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen text-white auth bg-gradient-to-r from-slate-800 to-slate-900">
            <div className="w-full max-w-md p-8 space-y-6 text-blue-600 bg-white rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-semibold text-slate-950">Forgot Password</h2>
                    <form onSubmit={handlePasswordReset}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full p-3 mb-4 border rounded-lg outline-none text-slate-950"
                        />
                        <button onClick={() => console.log("changing password...")} className="px-6 py-3 bg-yellow-400 text-white font-semibold rounded-full shadow-lg hover:bg-yellow-500">
                            Reset Password
                        </button>                    </form>
                    {message && <p>{JSON.stringify(message)}</p>}
                    {error && <p>{JSON.stringify(error)}</p>}
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
