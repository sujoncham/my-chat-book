import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='bg-gray-300'>
            <div className='container mx-auto px-16 py-16 flex justify-center items-center gap-10'>
                <div className='w-[50%]'>
                    <img className='w-[100%] rounded-lg' src="/images/3.jpg" alt="" />
                </div>
                <div class="bg-white w-[50%] py-10 rounded-lg px-10">
                    <form class="shadow-md rounded px-8 pb-8 mb-4 flex flex-col">
                        <div class="mb-4">
                            <h1 className='text-5xl font-bold pb-5'>Login</h1>
                        </div>
                        <div class="mb-4">
                            <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
                            Username
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="username" type="text" placeholder="Username" />
                        </div>
                        <div class="mb-6">
                            <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                            Password
                            </label>
                            <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" name="password" type="password" placeholder="******************" />
                            <p class="text-red text-xs italic">Please choose a password.</p>
                        </div>
                        <div class="flex items-center justify-between">
                            <button class="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded" type="submit">
                            Sign In
                            </button>
                            <Link class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" to="#">
                            Forgot Password?
                            </Link>
                        </div>
                    </form>
                    <div class="text-gray-800 mt-6">
                        create an account? 
                        <Link class="no-underline ml-2 border-b border-blue-500 text-blue-500" to="/register">
                            Regiser
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;