import React from "react";

const Categories = () => {
  const data = [
    {
      catImg: "./images/category/cat1.png",
      catName: "Personal Care",
    },
    {
        catImg: "./images/category/cat9.png",
        catName: "Baby & Mother",
      },
      {
        catImg: "./images/category/cat4.png",
        catName: "Ayurveda & Herbs",
      },
      {
        catImg: "./images/category/cat5.png",
        catName: "Supplements",
      },
      {
        catImg: "./images/category/cat3.png",
        catName: "Makeup",
      },
      {
        catImg: "./images/category/cat2.png",
        catName: "Households & Needs",
      },
      {
        catImg: "./images/category/cat7.png",
        catName: "Health Needs",
      },
      {
        catImg: "./images/category/cat6.png",
        catName: "Sexual Wellness",
      },
      {
        catImg: "./images/category/cat8.png",
        catName: "Pets",
      },
      {
        catImg: "./images/category/cat10.png",
        catName: "Groceries",
      },
      {
        catImg: "./images/category/cat11.png",
        catName: "Books",
      },
  ];
  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
              <div className="box f_flex" key={index}>
              <img src={value.catImg} alt="" />
              <span>{value.catName}</span>
              </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
