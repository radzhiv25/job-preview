import React from "react";

const JobDescription = () => {
  return (
    <div className="p-5 border-t border-dashed">
      <h3 className="text-gray-500">About the job</h3>
      <ol className="ml-4 mt-1 list-decimal">
        <li>Handle the UI/UX research Design</li>
        <li>Work on researching on latest web applications designs & trends</li>
        <li>Work on Conceptualizing and visualizing</li>
        <li>
          Work on creating graphics contend and other graphic related works
        </li>
      </ol>
      <p>Benefits</p>
      <ul className="ml-4 list-disc">
        <li>Health Insurance</li>
        <li>Provident Fun</li>
      </ul>
      <p>Schedule</p>
      <ul className="ml-4 list-disc">
        <li>Day Shift</li>
      </ul>
      <p>Supplemental Pay Types:</p>
      <ul className="ml-4 list-disc">
        <li>Performance Bonus</li>
        <li>Yearly Bonus</li>
      </ul>
      <p>Work Location: In person</p>
    </div>
  );
};

export default JobDescription;
