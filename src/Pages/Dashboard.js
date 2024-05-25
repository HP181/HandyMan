import React from "react";
import Search from "../Componants/Search";
import Cards from "../Componants/Cards";
import Services from "../Componants/Services";

const Dashboard = () => {
  return (
    <div className="pb-5 ">
      <div className="flex max-w-6xl m-auto pt-5">
        <div className="flex-[50vw] ">
          <Search />

          <div className="flex flex-col gap-y-5 ">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>

        </div>


        <div className="flex-[20vw] pl-10">
            <Services />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
