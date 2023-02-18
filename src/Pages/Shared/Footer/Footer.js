import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [categories, setCategories] = useState();
  const [companies, setComapnies] = useState();

  useEffect(() => {
    fetch("https://jobdrill-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data))
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    fetch("https://jobdrill-server.vercel.app/companies")
      .then((res) => res.json())
      .then((data) => setComapnies(data.data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <footer className="">
      <div className="p-16 grid lg:grid-cols-5 justify-center gap-10">
        <div>
          <div className="logo-container mb-5">
            <Link to="/" className="text-3xl font-bold ">
              JOB<span className="logo-2">DRILL</span>
            </Link>
          </div>
          <p className="mb-5">
            Lorem Ipsum is simply dummy text of printing and type setting
            industry.
          </p>
          <div className="social-icons flex gap-3">
            <Link to="/" className="rounded-full p-2">
              <FaFacebookF className="social-icon" />
            </Link>
            <Link to="/" className="rounded-full p-2">
              <FaTwitter className="social-icon" />
            </Link>
            <Link to="/" className="rounded-full p-2">
              <FaInstagram className="social-icon" />
            </Link>
          </div>
        </div>
        <div className="col-span-2">
          <h3 className="text-xl font-semibold pb-3 mb-7 border-b-2">Job Categories</h3>
          <ul className="grid grid-cols-2 gap-3">
            {categories?.map((category, index) => (
              <li key={index}>
                <Link>{category?.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2">
          <h3 className="text-xl font-semibold pb-3 mb-7 border-b-2">Top Companies</h3>
          <ul className="grid grid-cols-2 gap-3">
            {companies?.map((company, index) => (
              <li key={index}>
                <Link>{company?.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="py-8 text-center border-t">
        Copyright &copy; 2023 All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
