import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./Navbar";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [name, setName] = useState("");
  const [load, setLoad] = useState(false);

  const changeEmail = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setLoad(!load);
    // console.log(email);
  };

  const changePassword = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setLoad(!load);
    // console.log(password);
  };

  //   const changeName = async (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setName(event.target.value);
  //     setLoad(!load);
  //     // console.log(name);
  //   };

  //   return (
  //     <div>
  //       <input type="email" value={email} onChange={changeEmail} />
  //       <input type="password" value={password} onChange={changePassword} />
  //       <input type="text" value={name} onChange={changeName} />
  //     </div>
  //   );
  return (
    <div>
      <Navbar />
      <div className="h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="w-full m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <ToastContainer />
          <div className="flex-1 flex flex-col items-center justify-center text-center p-12">
            <div className="w-1/2 h-1/2 bg-contain bg-center bg-no-repeat bg-logo hidden lg:flex"></div>
            <div className="text-4xl text-brown-700">
              NIT Rourkela Mess Manager
            </div>
          </div>
          <div className="w-px h-full bg-gray-100 text-gray-900"></div>
          <div className="lg:w-1/2 dm:w-full sm:p-12">
            <div>
              <img
                src="/NIT-Rourkela.png"
                className="w-96 mx-auto inset-0 bg-blue-500"
              />
            </div>
            <div className="  flex flex-col items-center">
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center">
                  <h1 className="text-3xl mb-10  text-[#0e0a40]">Sign In</h1>
                </div>

                <div className="mx-auto px-4 lg:w-2/3 sm:w-5/6">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                    value={email}
                    name="email"
                    onChange={changeEmail}
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={changePassword}
                  />
                  <button
                    // onClick={signin}
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-[200px] m-auto py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Sign In</span>
                  </button>
                  <div className="my-12 border-b text-center">
                    <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                      Don't have an account??{" "}
                      <Link className="text-[#0e0a40] font-bold" to="/Register">
                        {" "}
                        Sign Up
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
