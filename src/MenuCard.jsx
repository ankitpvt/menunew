import React from "react";
import "./MenuCard.css";
//import { Link } from "react-router-dom";

const menuData = [
  { id: 1, name: "Margherita Pizza", category: "Italian", price: 10.99, description: "Classic cheese pizza with fresh basil." },
  { id: 2, name: "Chicken Biryani", category: "Indian", price: 12.49, description: "Aromatic rice with spices and chicken." },
  { id: 3, name: "Sushi Platter", category: "Japanese", price: 15.99, description: "Assorted sushi with wasabi and soy sauce." },
  { id: 4, name: "Tacos", category: "Mexican", price: 9.99, description: "Soft tortillas with seasoned beef and toppings." },
  { id: 5, name: "Caesar Salad", category: "Salad", price: 7.99, description: "Crisp lettuce with Caesar dressing and croutons." },
];

const MenuCard = () => {
  return (
    <>
    <div className="menu-container">
      {menuData.map((dish) => (
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

export default MenuCard;
