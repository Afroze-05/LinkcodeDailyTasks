import dairyproducts from "../assets/dairyproducts.jpg";
import cosmetics from "../assets/cosmetics.jpg";
import groceries from "../assets/groceries.jpg";
import electronics from "../assets/electronics.jpg"; 
import homeappliance from "../assets/homeappliance.jpg";
import clothes from "../assets/clothes.jpg";

import { Link } from "react-router-dom";

const Categories = () => {
  return (<>
    <div className="section">
      <h2>Our Categories</h2>

      <div className="card-container">

        {/* Dairy Products Clickable */}
        <Link 
          to="/dairy" 
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="card">
            <img src={dairyproducts} alt="dairyproducts" />
            <h3>Dairy Products</h3>
          </div>
        </Link>

        {/* Cosmetics */}
        <div className="card">
          <img src={cosmetics} alt="cosmetics" />
          <h3>Cosmetics</h3>
        </div>

        {/* Groceries */}
        <div className="card">
          <img src={groceries} alt="groceries" />
          <h3>Groceries</h3>
        </div>
         

         {/* electronics */}
        <div className="card">
          <img src={electronics} alt="electronics" />
          <h3>Electronics</h3>
        </div>

        {/* homeappliance */}
        <div className="card">
          <img src={homeappliance} alt="homeappliance" />
          <h3>Home Appliances</h3>
        </div>

        {/* clothes */}
        <div className="card">
          <img src={clothes} alt="electclothes" />
          <h3>Cslothes</h3>
        </div>
      </div>
    </div>

     {/* Footer Section */}
      <footer className="home-footer">
        <div className="footer-content">
          <h2>ShopEasy</h2>
          <p>Making your shopping experience smooth and affordable.</p>

          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Categories</a>
            <a href="#">Contact</a>
          </div>

          <p className="copyright">
            © 2026 ShopEasy. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Categories;