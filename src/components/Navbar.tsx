import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-2">
          <div className="flex flex-wrap justify-between items-center max-w-screen-xl gap-3">
            <img
              src="https://www.nitrkl.ac.in/assets/images/logo.png"
              className="h-14"
              alt="NITR Logo"
            />
            <div className="relative h-10">
              <span
                className="absolute inset-0 animate-text-logo-animate1 text-2xl font-semibold whitespace-nowrap dark:text-white"
                style={
                  {
                    "--animate-duration": "1s",
                    "--animate-delay": "1s",
                    "--animate-repeat": "1",
                  } as React.CSSProperties
                }
              >
                National Institute of Technology Rourkela
              </span>
              <span
                className="absolute inset-0 animate-text-logo-animate2 text-2xl font-semibold whitespace-nowrap dark:text-white"
                style={
                  {
                    "--animate-duration": "1s",
                    "--animate-delay": "1s",
                    "--animate-repeat": "1",
                  } as React.CSSProperties
                }
              >
                राष्ट्रीय प्रौद्योगिकी संस्थान राउरकेला
              </span>
              <span
                className="absolute inset-0 animate-text-logo-animate3 text-2xl font-semibold whitespace-nowrap dark:text-white"
                style={
                  {
                    "--animate-duration": "1s",
                    "--animate-delay": "0s",
                    "--animate-repeat": "1",
                  } as React.CSSProperties
                }
              >
                ଜାତୀୟ ପ୍ରଯୁକ୍ତି ପ୍ରତିଷ୍ଠାନ ରାଉରକେଲା
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="tel:0674-996969"
              className="text-sm text-gray-500 dark:text-white hover:underline"
            >
              0674-996969
            </a>
            <a
              href="#"
              className="text-lg px-5 py-3 shadow-lg hover:bg-sky-500 hover:ring-sky-500 hover:text-white rounded-[12px] ring-1 ring-black text-blue-600 dark:text-blue-500 -mt-0.5"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>
      <nav
        className={`bg-white-50 dark:bg-gray-700 transition-all duration-300 border-b-[2.5px] border-orange-500 ${
          isFixed
            ? "fixed top-0 left-0 h-[3.8rem] w-full z-50 backdrop-blur-7"
            : ""
        }`}
      >
        <div className="max-w-screen-xl px-4 py-3 mx-auto flex justify-between items-center">
          {isFixed && (
            <a
              href="#"
              className="relative z-100 bg-white border-b-4 border-orange-500 rounded-full px-2 pb-2 "
            >
              <img
                src="https://www.nitrkl.ac.in/assets/images/logo.png"
                className="h-14"
                alt="NITR Logo"
                style={{ zIndex: 10 }}
              />
            </a>
          )}
          <ul
            className={`flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm ${
              isFixed ? "mt-[-25px] " : ""
            }`}
          >
            <li>
              <a
                href="#"
                className="text-black text-lg font-bold dark:text-white hover:underline"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black text-lg font-bold dark:text-white hover:underline"
              >
                Our Hostels
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black text-lg font-bold dark:text-white hover:underline"
              >
                Grievances
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black text-lg font-bold dark:text-white hover:underline"
              >
                HMC
              </a>
            </li>
          </ul>
          {isFixed && (
            <a
              href="#"
              className="text-lg px-4 py-2 mt-[-35px] shadow-lg hover:bg-sky-500 hover:ring-sky-500 hover:text-white rounded-[12px] ring-1 ring-black text-blue-600 dark:text-blue-500 -mt-0.5"
            >
              Sign Up
            </a>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
