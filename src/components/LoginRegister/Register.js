import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const navigate = useNavigate();

    
    let emptyErr;
    const handleRegistration = async(event) => {
        event.preventDefault();
        const userInfo = {username, email, password, confirmPass};
        if(username===''|| email ===''|| password===''){
            emptyErr = "must not be empty"
        }

        if(password === confirmPass){
        const url = "http://localhost:5000/register";

	    await axios.post(url, userInfo)
        .then(data => {
            console.log(data);
            if(data){
                toast('user added successfully');
                navigate('/login')
            }
        })
        .catch((error)=>{
            console.log('user not created', error);
            navigate('/register')
        })

        
    }
     else{
        alert("password wrong")
     }
	};
    return (
        
            <div className="bg-gray-300 min-h-screen">
                <div className="container mx-auto rounded-lg flex items-center gap-10 px-16 py-16">
                    <div className="w-[50%]">
                        <img className="w-[100%] rounded-lg" src="/images/post3.jpg" alt="" />
                    </div>
                    <div className="w-[50%] bg-white px-6 py-8 rounded shadow-md text-black">
                        <h1 className="mb-8 text-3xl text-center text-purple-500 font-bold">Sign up</h1>
                            <p className='text-red-800'>{emptyErr}</p>
                        <form onSubmit={handleRegistration}>
                        <input 
                            type="text"
                            className="block border border-purple-600 w-full p-3 rounded mb-4"
                            name="fullname"
                            onChange={(event)=>setUsername(event.target.value)}
                            placeholder="full name" />

                        <input 
                            type="email"
                            className="block border border-purple-600 w-full p-3 rounded mb-4"
                            name="email"
                            onChange={(event)=>setEmail(event.target.value)}
                            placeholder="email" />

                        <input 
                            type="password"
                            className="block border border-purple-600 w-full p-3 rounded mb-4"
                            name="password"
                            onChange={(event)=>setPassword(event.target.value)}
                            placeholder="password" />
                        <input 
                            type="password"
                            className="block border border-purple-600 w-full p-3 rounded mb-4"
                            name="confirmPass"
                            onChange={(event)=>setConfirmPass(event.target.value)}
                            placeholder="confirm password" />

                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-purple-500 text-white hover:bg-purple-600 focus:outline-none my-1">Create Account</button>

                        <div className="text-center text-sm text-purple-800 mt-4">
                            By signing up, you agree to the 
                            <Link className="no-underline border-b border-purple-800 text-purple-800" to="/">
                                Terms of Service
                            </Link> and 
                            <Link className="no-underline border-b border-purple-800 text-purple-800" to="/">
                                Privacy Policy
                            </Link>
                        </div>
                        <div className="text-gray-800 mt-6">
                            <span>Already have an account?</span> 
                            <Link className="no-underline ml-2 border-b border-blue font-bold text-purple-500" to="/login">
                                Log in
                            </Link>
                        </div>
                        </form>
                    </div>

                    
                </div>
            </div>
    );
};

export default Register;