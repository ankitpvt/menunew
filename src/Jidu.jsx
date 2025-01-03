import React from "react";
// import "./MenuCard.css";
//import { Link } from "react-router-dom";

const jiduData = [
    { id: 1, name: "Paneer Butter Masala", category: "Indian", price: 11.99, description: "Creamy tomato-based curry with tender paneer cubes." },
    { id: 2, name: "Veggie Burger", category: "Fast Food", price: 8.99, description: "Crispy veggie patty with fresh lettuce and mayo." },
    { id: 3, name: "Pasta Alfredo", category: "Italian", price: 13.99, description: "Rich and creamy Alfredo pasta with parmesan cheese." },
    { id: 4, name: "Chocolate Brownie", category: "Dessert", price: 6.49, description: "Warm brownie with a scoop of vanilla ice cream." },
  ];

const JiduCard = () => {
  return (
    <>
    <div className="menu-container">
      {jiduData.map((dish) => (
        <div className="menu-card" key={dish.id}>
          <h2>{dish.name}</h2>
          <p>{dish.category}</p>
          <p>{dish.description}</p>
          <p className="price">Price: ${dish.price}</p>
        </div>
      ))}
    </div>
    {/* <Link to="/qr-code">Admin Page</Link> */}
    </>
  );
};

export default JiduCard;
