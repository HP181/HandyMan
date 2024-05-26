import React from "react";
import Search from "../Componants/Search";
import Cards from "../Componants/Cards";
import Services from "../Componants/Services";

const Dashboard = () => {
  return (
    <div className="pb-5 ">
      <div className="flex flex-col md:flex-row max-w-6xl  m-auto pt-5 p-2  ">
        <div className="flex-[50vw] ">
          <Search />

          <div className="flex flex-col text-sm md:text-base gap-y-5  ">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>

        </div>


        <div className="flex-[20vw] mt-10 md:pl-10 md:mt-0">
            <Services />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
