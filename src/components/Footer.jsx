// components/Footer.jsx
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a>
            <a href="https://twitter.com/yourusername" target="_blank">Twitter</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Mohit Kumar Mathur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;