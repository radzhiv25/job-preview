import React from "react";
import { DiAtlassian } from "react-icons/di";
import { FaAtlassian } from "react-icons/fa";

const AboutCompany = () => {
  return (
    <div className="p-5 border-t border-dashed">
      <div className="py-2 flex items-center gap-2">
        <span className="p-2 bg-blue-600 rounded">
        <FaAtlassian className="size-5 text-white"/>
        </span>
        <h2 className="text-xl">Atlassian</h2>
        <button className="p-1 rounded-full font-semibold text-blue-600">follow</button>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="">
          <h3 className="text-gray-500">Company Size</h3>
          <p className="font-medium">1k - 2k Employees</p>
        </div>
        <div className="">
          <h3 className="text-gray-500">Type</h3>
          <p className="font-medium">Private</p>
        </div>
        <div className="">
          <h3 className="text-gray-500">Sector</h3>
          <p className="font-medium">Information Technology, Infrastructure</p>
        </div>
        <div className="">
          <h3 className="text-gray-500">Funding</h3>
          <p className="font-medium">Bootstrapped</p>
        </div>
        <div className="">
          <h3 className="text-gray-500">Founded In</h3>
          <p className="font-medium">2019</p>
        </div>
        <div className="">
          <h3 className="text-gray-500">Founded By</h3>
          <p className="font-medium">Scott Farquhar, Mike Cannon-Brookes</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
