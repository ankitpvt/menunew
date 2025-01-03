import React from "react";
// import "./MenuCard.css";
//import { Link } from "react-router-dom";

const vishalData = [
    { id: 1, name: "Butter Chicken", category: "Indian", price: 13.99, description: "Delicious chicken in a creamy tomato gravy." },
    { id: 2, name: "Fish Tacos", category: "Mexican", price: 10.49, description: "Soft tacos with seasoned fish and fresh salsa." },
    { id: 3, name: "Ramen Noodles", category: "Japanese", price: 14.99, description: "Flavorful noodles with broth, egg, and veggies." },
    { id: 4, name: "Lemon Cheesecake", category: "Dessert", price: 7.99, description: "Tangy lemon cheesecake with a graham cracker crust." },
  ];

const VishalCard = () => {
  return (
    <>
    <div className="menu-container">
      {vishalData.map((dish) => (
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

export default VishalCard;
