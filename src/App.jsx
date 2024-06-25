import { useState } from "react";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import JobDescription from "./components/JobDescription";
import AboutCompany from "./components/AboutCompany";
import AboutJob from "./components/AboutJob";

function App() {
  return (
    <>
      <Navbar />
      <Features />
      <main className="flex md:flex-row flex-col">
        <section className="md:w-4/5 p-5 border-r">
          <div className="">
            <div className="my-2 flex md:flex-row flex-col md:items-center md:space-x-2">
              <h2 className="md:text-4xl text-2xl font-bold">
                Senior Product Designer
              </h2>
              <div className="flex items-center space-x-2">
                <p className="text-gray-500">posted 2 days</p>
                <p className="p-1 rounded-full flex items-center text-green-300 border border-green-400 text-xs">
                  <span></span>Open
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-1 my-2">
              <p>
                <span></span>Delaware, USA
              </p>
              <span></span>
              <p>
                <span></span>$300K -400K
              </p>
            </div>
          </div>
          <AboutJob />
          <JobDescription />
          <AboutCompany />
        </section>
        <section className="md:w-1/5 md:border-t-0 border-t border-dashed">
          <div className="p-3">
            <div className="flex items-center space-x-5 w-full mx-auto">
              <button className="w-full p-2 rounded-md border-orange-500 border">
                <span></span>Delete Job
              </button>
              <button className="w-full p-2 rounded-md bg-orange-500 text-white">
                <span></span>Edit Job
              </button>
            </div>
            <div className="">
              <ul></ul>
            </div>
            <div className="my-3 shadow-xl py-3 px-5 rounded-xl ">
              <h2 className="text-lg   mb-5 font-semibold">"A quote from Atlassian"</h2>
              <div className="flex items-center gap-2 ">
                <div className="size-10 bg-gray-500 rounded-full">
                </div>
                <div className="">
                  <h3 className="text-gray-500">Name</h3>
                  <p>Description</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
