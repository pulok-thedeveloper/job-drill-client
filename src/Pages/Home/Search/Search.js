import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const [tab, setTab] = useState(true);

  const handleTab = (param) => {
    setTab(param);
  };
  return (
    <div className="search-container py-10 px-16 mx-auto">
      <div className="flex justify-center">
        <div className="search-tabs">
          <button
            className={`find-job px-5 py-3 bg-white rounded-tl-lg ${tab ? "active" : ""}`}
            onClick={() => handleTab(true)}
          >
            Find a Job
          </button>
          <button
            className={`find-candidate px-5 py-3 bg-white rounded-tr-lg ${!tab ? "active" : ""}`}
            onClick={() => handleTab(false)}
          >
            Find a Candidate
          </button>
        </div>
      </div>
      <form className="grid grid-cols-4 gap-5 bg-white p-5 mb-7 rounded-md">
        <input
          className="form-control rounded"
          type="text"
          placeholder="eg. Graphic, Web Developer"
        />
        <select className="form-control rounded">
          <option disabled>Location</option>
          <option>Dhaka</option>
          <option>Rangpur</option>
          <option>Syllhet</option>
        </select>
        <select className="form-control rounded">
          <option disabled>Category</option>
          <option>Rangpur</option>
          <option>Syllhet</option>
        </select>
        <button className="form-control submit-btn rounded">Search</button>
      </form>
      <p>
        <span className="font-semibold">Trending Job Keywords: </span> 
        <Link className="keyword">Graphic Designer</Link>
        <Link className="keyword">Web Designer</Link>
        <Link className="keyword">Web Developer</Link>
        <Link className="keyword">IOS Developer</Link>
        <Link className="keyword">Android Developer</Link>
      </p>
    </div>
  );
};

export default Search;
