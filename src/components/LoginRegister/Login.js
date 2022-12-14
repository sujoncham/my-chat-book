import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmission = async(event) => {
    event.preventDefault();
    const userInfo = { email, password };
 
    const url = "http://localhost:5000/login";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        "content-type": "application/json",
      }
    })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      if (result) {
        alert("You are successfully logged in!");
        localStorage.setItem("userToken", result.token);
        localStorage.setItem("userEmail", result.user.email);
        localStorage.setItem("username", result.user.username);
        navigate("/");
      } 
    });
    
  };
  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="container mx-auto px-16 py-16 flex items-center gap-10">
        <div className="w-[50%]">
          <img className="w-[100%] rounded-lg" src="/images/post3.jpg" alt="" />
        </div>
        <div className="bg-white w-[50%] py-10 rounded-lg px-10">
          <form
            onSubmit={handleSubmission}
            className="shadow-md rounded px-8 pb-8 mb-4 flex flex-col"
          >
            <div className="mb-4">
              <h1 className="text-5xl text-purple-500 font-bold pb-5">Login</h1>
            </div>
            <div className="mb-4">
              <label
                className="block text-purple-500 text-sm font-bold mb-2"
                htmlFor="email"
              >
                user email
              </label>
              <input
                className="shadow appearance-none border border-purple-500 rounded w-full py-2 px-3 text-purple-500"
                name="email"
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-purple-500 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-purple-500 rounded w-full py-2 px-3 text-purple-500 mb-3"
                name="password"
                type="password"
                onChange={(event)=>setPassword(event.target.value)}
                placeholder="password"
                required
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-purple-500 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Sign In
              </button>
              <Link
                className="inline-block align-baseline font-bold text-sm text-purple-300 hover:text-purple-500"
                to="#"
              >
                Forgot Password?
              </Link>
            </div>
          </form>
          <div className="text-gray-800 mt-6">
            create an account?
            <Link
              className="no-underline ml-2 font-bold text-purple-500"
              to="/register"
            >
              Regiser
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
