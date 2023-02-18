import React from "react";
import "./Subscribe.css";
import { GoMail } from "react-icons/go";

const Subscribe = () => {
  return (
    <div className="subscribe-container p-16 text-center">
      <h1 className="text-4xl font-bold mb-5 text-white">
        Subscribe Our Newsletter!
      </h1>
      <p className="w-2/3 mx-auto text-white">
        Lorem Ipsum is simply dummy text printing and type setting industry
        Lorem Ipsum been industry standard dummy text ever since when unknown
        printer took a galley.
      </p>
      <div className="input-group w-2/4 mt-16 mx-auto flex items-center rounded">
        <input
          className="h-14 w-full rounded-l pl-5"
          type="email"
          placeholder="Enter your Email.."
        />
        <div><button className="subscribe-btn px-5 py-3 rounded-r relative">SUBSCRIBE</button></div>
      </div>
    </div>
  );
};

export default Subscribe;
