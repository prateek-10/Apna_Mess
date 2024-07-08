import React from "react";
import supabase from "../supabaseClient";
import { useState } from "react";
import { useEffect } from "react";
import DashboardNav from "./DashboardNav";

type Props = {};

const Dashboard = (props: Props) => {
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

  return (
    <>
      <DashboardNav />
      <div className="w-full h-screen border-gray-200 bg-white">
        <div className=" mx-auto p-5 w-full lg:w-2/5 ">
          <h1 className="text-center text-4xl text-black p-5">
            NIT-Rourkela Mess Service{" "}
          </h1>
        </div>
        {/* <div className="grid grid-cols-2 grid-rows-2 w-full h-full items-center justify-center text-black border-gray-200 bg-white">
          <div className="w-full h-full flex items-center justify-center bg-amber-300 text-5xl">
            <a href="/Menu" className="w-full h-full">
              {" "}
              <button className="tracking-wide font-semibold bg-amber-300 text-gray-100 w-full h-full py-4  hover:bg-amber-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                Menu
              </button>
            </a>
          </div>
          <div className="w-full h-full flex items-center justify-center text-5xl bg-amber-300">
            <a href="/application" className="w-full h-full">
              {" "}
              <button className="tracking-wide font-semibold bg-amber-300 text-gray-100 w-full h-full py-4  hover:bg-amber-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                Apply Late Meal
              </button>
            </a>
          </div>
          <div className="w-full h-full flex items-center justify-center text-5xl bg-amber-300">
            <a href="/application" className="w-full h-full">
              {" "}
              <button className="tracking-wide font-semibold bg-amber-300 text-gray-100 w-full h-full py-4  hover:bg-amber-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                View Your Application
              </button>
            </a>
          </div>
          <div className="w-full h-full flex items-center justify-center text-5xl bg-amber-300">
            <a href="/application" className="w-full h-full">
              {" "}
              <button className="tracking-wide font-semibold bg-amber-300 text-gray-100 w-full h-full py-4  hover:bg-amber-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                Sign Out
              </button>
            </a>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;
