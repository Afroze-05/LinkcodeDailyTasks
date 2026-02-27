const Contact = () => {
  return (  <>
    <div className="section">
      <h2>Contact Us</h2>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea rows="4" placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
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

export default Contact;