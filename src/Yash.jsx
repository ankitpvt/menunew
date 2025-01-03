import React from "react";
// import "./MenuCard.css";
//import { Link } from "react-router-dom";

const yashData = [
    { id: 1, name: "Malai Kofta", category: "Indian", price: 12.49, description: "Soft paneer dumplings in a rich, creamy gravy." },
    { id: 2, name: "Chicken Quesadilla", category: "Mexican", price: 11.99, description: "Grilled tortilla stuffed with chicken and cheese." },
    { id: 3, name: "Pad Thai", category: "Thai", price: 14.49, description: "Stir-fried noodles with tamarind sauce and peanuts." },
    { id: 4, name: "Fruit Salad", category: "Healthy", price: 6.49, description: "Refreshing mix of seasonal fruits and honey." },
  ];

const YashCard = () => {
  return (
    <>
    <div className="menu-container">
      {yashData.map((dish) => (
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

export default YashCard;
