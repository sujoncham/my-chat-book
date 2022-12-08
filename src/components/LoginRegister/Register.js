import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        
            <div class="bg-gray-300 min-h-screen flex flex-col">
                <div class="container max-w-sm mx-auto rounded-lg flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 class="mb-8 text-3xl text-center text-green-500 font-bold">Sign up</h1>
                        <input 
                            type="text"
                            class="block border border-gray-600 w-full p-3 rounded mb-4"
                            name="fullname"
                            placeholder="Full Name" />

                        <input 
                            type="text"
                            class="block border border-gray-600 w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />

                        <input 
                            type="password"
                            class="block border border-gray-600 w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />
                        <input 
                            type="password"
                            class="block border border-gray-600 w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password" />

                        <button
                            type="submit"
                            class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-800 focus:outline-none my-1">Create Account</button>

                        <div class="text-center text-sm text-gray-800 mt-4">
                            By signing up, you agree to the 
                            <Link class="no-underline border-b border-gray-800 text-gray-800" to="/">
                                Terms of Service
                            </Link> and 
                            <Link class="no-underline border-b border-gray-800 text-gray-800" to="/">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>

                    <div class="text-gray-800 mt-6">
                        Already have an account? 
                        <Link class="no-underline ml-2 border-b border-blue text-blue-500" to="/login">
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
    );
};

export default Register;