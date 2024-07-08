import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import supabase from "../supabaseClient";
import { useNavigate } from "react-router-dom";

type Props = {};

const DashboardNav = (props: Props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setUser(user);
        console.log(user);
        console.log(user.user_metadata.name);
        return;
      }
      console.log("Not User Received");
    };

    fetchUser();
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error);
    } else {
      console.log("Signed out successfully");
      navigate("/");
    }
  };
  return (
    <nav className="border-gray-200 bg-white px-2 py-5 shadow-2xl">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="/Dashboard" className="flex">
          <img
            className="h-[50px] "
            src="/NIT_Rourkela_Colour_Logo.svg.png"
            alt=""
          />
        </a>
        <div className="flex md:order-2">
          <div className="relative mr-3 md:mr-0 hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
            <span>
              {user ? (
                user.user_metadata.name ? (
                  <span className="flex text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 mx-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>{" "}
                    {user.user_metadata.name}
                  </span>
                ) : (
                  <span className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 mx-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                    User
                  </span>
                )
              ) : (
                <span className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mx-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  User
                </span>
              )}
            </span>
          </div>
          <button
            data-collapse-toggle="mobile-menu-3"
            type="button"
            className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
            aria-controls="mobile-menu-3"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1"
          id="mobile-menu-3"
        >
          <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="/Dashboard"
                className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 flex pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                aria-current="page"
              >
                <svg
                  width="30px"
                  height="17px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.3103 1.77586C11.6966 1.40805 12.3034 1.40805 12.6897 1.77586L20.6897 9.39491L23.1897 11.7759C23.5896 12.1567 23.605 12.7897 23.2241 13.1897C22.8433 13.5896 22.2103 13.605 21.8103 13.2241L21 12.4524V20C21 21.1046 20.1046 22 19 22H14H10H5C3.89543 22 3 21.1046 3 20V12.4524L2.18966 13.2241C1.78972 13.605 1.15675 13.5896 0.775862 13.1897C0.394976 12.7897 0.410414 12.1567 0.810345 11.7759L3.31034 9.39491L11.3103 1.77586ZM5 10.5476V20H9V15C9 13.3431 10.3431 12 12 12C13.6569 12 15 13.3431 15 15V20H19V10.5476L12 3.88095L5 10.5476ZM13 20V15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15V20H13Z"
                    fill="#000000"
                  />
                </svg>
                Home
              </a>
            </li>
            <li>
              <a
                href="/Menu"
                className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 flex pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                aria-current="page"
              >
                <svg
                  width="30px"
                  height="20px"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#000000"
                    d="M128 352.576V352a288 288 0 0 1 491.072-204.224 192 192 0 0 1 274.24 204.48 64 64 0 0 1 57.216 74.24C921.6 600.512 850.048 710.656 736 756.992V800a96 96 0 0 1-96 96H384a96 96 0 0 1-96-96v-43.008c-114.048-46.336-185.6-156.48-214.528-330.496A64 64 0 0 1 128 352.64zm64-.576h64a160 160 0 0 1 320 0h64a224 224 0 0 0-448 0zm128 0h192a96 96 0 0 0-192 0zm439.424 0h68.544A128.256 128.256 0 0 0 704 192c-15.36 0-29.952 2.688-43.52 7.616 11.328 18.176 20.672 37.76 27.84 58.304A64.128 64.128 0 0 1 759.424 352zM672 768H352v32a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-32zm-342.528-64h365.056c101.504-32.64 165.76-124.928 192.896-288H136.576c27.136 163.072 91.392 255.36 192.896 288z"
                  />
                </svg>
                Menu
              </a>
            </li>

            <li>
              <a
                href="/application"
                className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 flex pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
              >
                <svg
                  width="30px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 7C4 5.11438 4 4.17157 4.58579 3.58579C5.17157 3 6.11438 3 8 3H16C17.8856 3 18.8284 3 19.4142 3.58579C20 4.17157 20 5.11438 20 7V15C20 17.8284 20 19.2426 19.1213 20.1213C18.2426 21 16.8284 21 14 21H10C7.17157 21 5.75736 21 4.87868 20.1213C4 19.2426 4 17.8284 4 15V7Z"
                    stroke="#33363F"
                    strokeWidth="2"
                  />
                  <path
                    d="M15 18L15 21M9 18L9 21"
                    stroke="#33363F"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9 8L15 8"
                    stroke="#33363F"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9 12L15 12"
                    stroke="#33363F"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Apply Late Meal
              </a>
            </li>

            <li>
              <a
                href="/viewapplication"
                className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 flex pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-5 mx-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                View Application
              </a>
            </li>

            <li
              onClick={handleSignOut}
              className="text-gray-700 cursor-pointer hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 flex pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
            >
              <svg
                width="30px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21C10.2211 20.9984 8.48259 20.4697 7.004 19.4807C5.52542 18.4916 4.37308 17.0866 3.69255 15.443C3.01201 13.7995 2.8338 11.9911 3.18041 10.2463C3.52702 8.50153 4.38292 6.89859 5.63999 5.63995C5.70894 5.56919 5.79135 5.51296 5.88238 5.47456C5.97341 5.43616 6.0712 5.41638 6.16999 5.41638C6.26879 5.41638 6.36658 5.43616 6.4576 5.47456C6.54863 5.51296 6.63105 5.56919 6.69999 5.63995C6.84044 5.78058 6.91933 5.9712 6.91933 6.16995C6.91933 6.3687 6.84044 6.55933 6.69999 6.69995C5.96312 7.38657 5.3721 8.21458 4.96218 9.13457C4.55226 10.0546 4.33184 11.0477 4.31408 12.0547C4.29631 13.0618 4.48155 14.062 4.85877 14.9959C5.23598 15.9298 5.79742 16.7781 6.50961 17.4903C7.2218 18.2025 8.07013 18.764 9.00402 19.1412C9.9379 19.5184 10.9382 19.7036 11.9452 19.6859C12.9522 19.6681 13.9454 19.4477 14.8654 19.0378C15.7854 18.6278 16.6134 18.0368 17.3 17.3C17.9978 16.605 18.5515 15.779 18.9294 14.8695C19.3072 13.96 19.5017 12.9848 19.5017 12C19.5017 11.0151 19.3072 10.0399 18.9294 9.13039C18.5515 8.22088 17.9978 7.39493 17.3 6.69995C17.1595 6.55933 17.0807 6.3687 17.0807 6.16995C17.0807 5.9712 17.1595 5.78058 17.3 5.63995C17.3689 5.56919 17.4514 5.51296 17.5424 5.47456C17.6334 5.43616 17.7312 5.41638 17.83 5.41638C17.9288 5.41638 18.0266 5.43616 18.1176 5.47456C18.2086 5.51296 18.291 5.56919 18.36 5.63995C19.6171 6.89859 20.473 8.50153 20.8196 10.2463C21.1662 11.9911 20.988 13.7995 20.3074 15.443C19.6269 17.0866 18.4746 18.4916 16.996 19.4807C15.5174 20.4697 13.7789 20.9984 12 21Z"
                  fill="#000000"
                />
                <path
                  d="M12 12.75C11.8019 12.7474 11.6126 12.6676 11.4725 12.5275C11.3324 12.3874 11.2526 12.1981 11.25 12V4C11.25 3.80109 11.329 3.61032 11.4697 3.46967C11.6103 3.32902 11.8011 3.25 12 3.25C12.1989 3.25 12.3897 3.32902 12.5303 3.46967C12.671 3.61032 12.75 3.80109 12.75 4V12C12.7474 12.1981 12.6676 12.3874 12.5275 12.5275C12.3874 12.6676 12.1981 12.7474 12 12.75Z"
                  fill="#000000"
                />
              </svg>
              Sign out
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
