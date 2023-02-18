import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import "./Experiencedjobs.css";

const Experiencedjobs = () => {
  const [jobs, setJobs] = useState();

  useEffect(() => {
    fetch("https://jobdrill-server.vercel.app/jobs/experienced")
      .then((res) => res.json())
      .then((data) => setJobs(data.data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="experienced p-16">
      <div className="mb-12 text-center">
        <p className="sub-title mb-3 font-bold">EXPERIENCED JOBS</p>
        <h1 className="text-5xl font-bold">Start finding your dream job</h1>
      </div>
      <div className="grid lg:grid-cols-2 gap-10">
        {jobs?.map((job, index) => (
          <div
            key={index}
            className="job-container py-8 rounded grid grid-cols-5 justify-center items-center"
          >
            <div className="company-logo col-span-1 justify-self-center">
              <img src={job?.logo} alt="" />
            </div>
            <div className="col-span-3">
              <h2 className="text-xl font-bold mb-2">{job?.Position}</h2>
              <p className="company-name font-bold mb-3">{job?.CompanyName}</p>
              <p className="salary mb-1 text-sm flex items-center gap-2">
                <FaMoneyBillAlt /> $20k - $25k
              </p>
              <p className="location text-sm flex items-center gap-2">
                <MdLocationOn /> {job?.jobLocation}
              </p>
            </div>
            <div className="col-span-1">
              <Link to="/" className="apply-btn py-2 px-5 rounded">
                <button>Apply</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-16">
        <Link to="/" className="browse-btn py-2 px-5 rounded">
          <button>BROWSE ALL JOBS</button>
        </Link>
      </div>
    </div>
  );
};

export default Experiencedjobs;
