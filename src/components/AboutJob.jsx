import React from "react";
import { FaFigma } from "react-icons/fa";
import { SiAdobeillustrator, SiAdobexd } from "react-icons/si";

const AboutJob = () => {
  return (
    <div className="md:p-3 py-2">
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        <div className="">
          <h3 className="text-gray-500">Skills Required</h3>
          <ul className="space-y-2">
            <li className="border p-1 flex items-center space-x-1 rounded-md w-max">
              <span>
                <FaFigma className="size-4"/>
              </span>
              <p>Figma</p>
            </li>
            <li className="border p-1 flex items-center space-x-1 rounded-md w-max">
              <span>
                <SiAdobeillustrator className="size-5"/>
              </span>
              <p>Adobe Illustrator</p>
            </li>
            <li className="border p-1 flex items-center space-x-1 rounded-md w-max">
              <span>
                <SiAdobexd className="size-5"/>
              </span>
              <p>Adobe XD</p>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-gray-500">Preferred Language</h3>
          <p>English</p>
        </div>
        <div className="">
          <h3 className="text-gray-500">Type</h3>
          <p>Full time</p>
        </div>
        <div className="">
          <h3 className="text-gray-500">Years of Experience</h3>
          <p>3+ Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default AboutJob;
