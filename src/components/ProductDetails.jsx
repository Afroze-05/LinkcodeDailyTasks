import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state;

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product Not Found</h2>;
  }

  return (
    <div className="product-details">
      <div className="details-container">

        <div className="details-img">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="details-info">
          <h2>{product.name}</h2>
          <p className="details-rating">⭐ {product.rating} (120 Reviews)</p>
          <h3 className="details-price">₹{product.price}</h3>

          <button className="buy-btn">Buy Now</button>

          <div className="payment-options">
            <h4>Payment Options:</h4>
            <ul>
              <li>Google Pay</li>
              <li>Credit / Debit Card</li>
              <li>UPI</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetails;