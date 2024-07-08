import React from "react";
import { useState } from "react";
import Select, { SingleValue } from "react-select";
import supabase from "../supabaseClient";
import { useEffect } from "react";
import DashboardNav from "./DashboardNav";

type Props = {};

const options = [
  { value: "SD", label: "SD Hall" },
  { value: "VS", label: "VS Hall" },
  { value: "MV", label: "MV Hall" },
  { value: "MSS", label: "MSS Hall" },
  { value: "DBA", label: "DBA Hall" },
  { value: "HB", label: "HB Hall" },
];

const getDayOfWeek = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  return days[today.getDay()];
};

const Menu = (props: Props) => {
  const [Hostel, setHostel] =
    useState<SingleValue<{ value: string; label: string }>>();

  const [mealData, setMealData] = useState<any>(null);

  const handleChange = (
    selectedOption: SingleValue<{
      value: string;
      label: string;
    }>
  ) => {
    setHostel(selectedOption);
    setMealData(null);
    console.log(`Option selected:`, selectedOption);
  };

  useEffect(() => {
    const fetchMealData = async () => {
      if (Hostel) {
        const { data, error } = await supabase
          .from("mess_menu")
          .select("*")
          .eq("hostel_name", Hostel.value)
          .eq("day", getDayOfWeek());

        if (error) {
          console.error("Error fetching meal data:", error);
        } else {
          setMealData(data);
          console.log(data);
        }
      }
    };

    fetchMealData();
  }, [Hostel]);

  return (
    <div className="w-full h-screen border-gray-200 bg-white text-black">
      <DashboardNav />
          <Select
            options={options}
            onChange={handleChange}
            placeholder="Select a Hostel"
          />
          {mealData && (
            <div className="mt-8 h-4/5">
              <h2 className="text-4xl text-center mb-6">
                {Hostel?.label} - {getDayOfWeek()}
              </h2>
              <div className="h-4/5">
                <div className=" h-1/4 flex justify-center items-center flex-col">
                  <h1 className="text-center text-4xl text-black p-5">Breakfast</h1>
                  <h1 className="text-2xl mt-2">
                    {mealData[0]?.menu || "No menu available"}
                  </h1>
                </div>
                <div className=" h-1/4 flex justify-center items-center flex-col">
                  <h1 className="text-center text-4xl text-black p-5">Lunch</h1>
                  <h1 className="text-2xl mt-2">
                    {mealData[1]?.menu || "No menu available"}
                  </h1>
                </div>
                <div className=" h-1/4 flex justify-center items-center flex-col">
                  <h1 className="text-center text-4xl text-black p-5">Snacks</h1>
                  <h1 className="text-2xl mt-2">
                    {mealData[2]?.menu || "No menu available"}
                  </h1>
                </div>
                <div className=" h-1/4 flex justify-center items-center flex-col">
                  <h1 className="text-center text-4xl text-black p-5">Dinner</h1>
                  <h1 className="text-2xl mt-2">
                    {mealData[3]?.menu || "No menu available"}
                  </h1>
                </div>
              </div>
            </div>
          )}
        </div>
      
    
  );
};

export default Menu;
