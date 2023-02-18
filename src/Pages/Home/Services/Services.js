import React, { useEffect, useState } from "react";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState();
  const [activeService, setActiveService] = useState(1);

  useEffect(() => {
    fetch("https://jobdrill-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data.data))
      .catch((err) => console.log(err.message));
  }, []);

  const handleActive = (index) =>{
    setActiveService(index)
  }

  return (
    <div className="service-container grid grid-cols-2 lg:grid-cols-4 gap-10 p-16">
      {services && services?.map((service, index) => (
        <div onMouseOver={()=>handleActive(index)} key={index} className={`service grid justify-items-center text-center gap-5 px-3 py-5 rounded cursor-pointer ${activeService === index ? 'active': ''}`}>
          <img className="service-icons" src={service?.picture} alt="" />
          <h3 className="font-semibold text-md">{service?.title}</h3>
          <p className="text-gray-800">
            {service?.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Services;
