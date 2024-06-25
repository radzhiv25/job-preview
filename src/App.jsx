import Navbar from "./components/Navbar";
import Features from "./components/Features";
import JobDescription from "./components/JobDescription";
import AboutCompany from "./components/AboutCompany";
import AboutJob from "./components/AboutJob";
import Status from "./components/Status";
import { GoDotFill } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { HiOutlineCircleStack } from "react-icons/hi2";
import { RiDeleteBinLine } from "react-icons/ri";
import { GoPencil } from "react-icons/go";

function App() {
  return (
    <>
      <Navbar />
      <Features />
      <main className="flex md:flex-row flex-col">
        <section className="md:w-4/5 pt-5 pl-20 border-r border-dashed">
          <div className="pl-3">
            <div className="my-2 flex md:flex-row flex-col md:items-center md:space-x-2">
              <h2 className="md:text-4xl text-2xl font-bold">
                Senior Product Designer
              </h2>
              <GoDotFill className="size-2 text-gray-500" />
              <div className="flex items-center space-x-2 text-xs">
                <p className="text-gray-500">posted 2 days</p>
                <p className="p-1 rounded-full flex items-center text-green-300 border border-green-400 ">
                  <span></span>Open
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-1 my-2 text-gray-500">
              <p className="flex items-center">
                <span>
                  <GrLocation />
                </span>
                Delaware, USA
              </p>
              <span>
                <GoDotFill className="size-2" />
              </span>
              <p className="flex items-center">
                <span>
                  <HiOutlineCircleStack />
                </span>
                $300K -400K
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
              <button className="w-full p-2 rounded-md border-orange-500 border flex items-center justify-center gap-1 text-orange-500">
                <span>
                  <GoPencil />
                </span>
                Delete Job
              </button>
              <button className="w-full p-2 rounded-md bg-orange-500 text-white flex items-center justify-center gap-1">
                <span>
                  <RiDeleteBinLine />
                </span>
                Edit Job
              </button>
            </div>
            <Status />
            <div className="my-3 shadow-xl py-3 px-5 rounded-xl border border-slate-200">
              <h2 className="text-lg   mb-5 font-semibold">
                "A quote from Atlassian"
              </h2>
              <div className="flex items-center gap-2 mt-8">
                <div className="size-10 bg-gradient-to-br from-pink-500 to-purple-200 shadow rounded-full"></div>
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
