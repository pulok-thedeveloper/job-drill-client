import React, { useEffect, useState } from "react";
import "./Categories.css";

const Categories = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    fetch("https://jobdrill-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="p-16">
      <div className="mb-12 text-center">
        <p className="sub-title mb-3 font-bold">JOB CATEGORIES</p>
        <h1 className="text-5xl font-bold">Choose Your Desire Category</h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
        {categories?.map((category, index) => (
          <div
            key={index}
            className="category-container p-10 rounded grid justify-items-center text-center cursor-pointer"
          >
            <div className="category-icon rounded-full p-5 mb-5">
              <img src={category?.icon} alt="" />
            </div>
            <h3 className="font-semibold mb-3">{category?.name}</h3>
            <p className="available-jobs rounded">{category?.jobs} Jobs</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
