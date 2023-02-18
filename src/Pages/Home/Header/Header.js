import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container min-h-screen grid items-center px-16 text-white">
      <div>
        <h1 className="header-title text-6xl leading-tight font-bold mb-8">
          Search Between More <br/>
          Then <span className="job-number px-3 rounded">50,000</span> Open Jobs.
        </h1>
        <p className="w-1/2 leading-relaxed mb-10">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        <Link to='/' className='upload-btn px-5 py-3 rounded font-semibold'><button>Upload Your Resume</button></Link>
      </div>
    </div>
  );
};

export default Header;
