import React from "react";
import milk from "../assets/milk.jpg";
import cheese from "../assets/cheese.jpg";
import butter from "../assets/butter.jpg";
import { useNavigate } from "react-router-dom";

const DairyProducts = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Fresh Milk",
      price: 60,
      
      rating: 4.5,
      image: milk,
      reviews: 120,
      description: "Pure farm fresh milk with high nutrition value."
    },
    {
      id: 2,
      name: "Cheese",
      price: 120,
      rating: 4.3,
      image: cheese,
      reviews: 95,
      description: "Creamy and delicious cheese for your daily meals."
    },
    {
      id: 3,
      name: "Butter",
      price: 90,
      rating: 4.6,
      image: butter,
      reviews: 150,
      description: "Fresh dairy butter made from high quality cream."
    },
  ];

  return (
    <div className="section">
      <h2>Dairy Products</h2>

      <div className="product-container">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">₹{item.price}</p>
            <p className="rating">⭐ {item.rating} ({item.reviews} Reviews)</p>

            <button
              className="cart-btn"
              onClick={() => navigate("/product", { state: item })}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DairyProducts;