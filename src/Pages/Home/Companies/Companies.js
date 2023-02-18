import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Comapnies.css'

const Companies = () => {
    const [comapnies, setComapnies] = useState();

    useEffect(()=>{
        fetch('https://jobdrill-server.vercel.app/companies')
        .then(res => res.json())
        .then(data => setComapnies(data.data))
        .catch(err => console.log(err.message))
    },[])
  return (
    <div className="companies p-16">
      <div className="mb-12 text-center">
        <p className="sub-title mb-3 font-bold">TOP IT COMPANIES</p>
        <h1 className="text-5xl font-bold">Get Hired At Your Dream Company</h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
        {comapnies?.map((comapny, index) => (
          <div
            key={index}
            className="category-container p-10 rounded grid justify-items-center text-center cursor-pointer"
          >
            <div className="comapny-logo">
              <img src={comapny?.logo} alt="" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{comapny?.name}</h3>
            <p className="text-gray-800 mb-3">{comapny?.location}</p>
            <Link to='/' className="details-btn"><button>View Details</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
