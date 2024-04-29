import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import dataJob from "../src/utils/data.json";

function App() {
  return (
    <>
      <img src="../images/bg-header-desktop.svg" alt="" />

      <main className="bg-[#effafa]">
        <div className="relative w-full flex flex-col justify-center items-center">
          <input className="bg-[#effafa] drop-shadow-xl shadow-black border-black-700 border absolute -top-8 w-[80%] p-4" />
        </div>

        <div className="mt-10 flex justify-center items-center flex-col py-4">
          {dataJob.map((data) => (
            <div className="flex justify-start items-center mt-6 w-[80%]  shadow-xl">
              <div id="image" className="p-4">
                <img src={`${data.logo}`} alt="" />
              </div>
              <div id="content" className="flex flex-col text-start">
                <div id="company-name" className="flex">
                  <h2>{data.company}</h2> <span className="pl-2">{data.new && 'NEW'}</span> <span className="pl-2">{data.featured && 'FEATURED'}</span>
                </div>
                <h2 className="font-bold">{data.position}</h2>
              </div>
              <div id="job-filter" className="text-end grow p-4">
                <h2>{data.languages}</h2>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
