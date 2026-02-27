import freshproduct from "../assets/freshproduct.jpg";
import fastdelivery from "../assets/fastdelivery.jpg";
import bestprice from "../assets/bestprice.jpg";

const Home = () => {
  return (
    <>
      <div className="hero">
        <div>
          <h1>Welcome to ShopEasy 🛍️</h1>
          <p>Your Trusted Online Shopping Partner</p>
        </div>
      </div>

      <div className="section">
        <h2>Why Choose Us?</h2>
        <div className="card-container">
          <div className="card">
            <img src={freshproduct} alt="freshproduct" />
            <h3>Fresh Products</h3>
          </div>

          <div className="card">
            <img src={fastdelivery} alt="fastdelivery" />
            <h3>Fast Delivery</h3>
          </div>

          <div className="card">
            <img src={bestprice} alt="bestprice" />
            <h3>Best Prices</h3>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="home-footer">
        <div className="footer-content">
          <h2>ShopEasy</h2>
          <p>Making your shopping experience smooth and affordable.!!</p>

          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Categories</a>cd my
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

export default Home;