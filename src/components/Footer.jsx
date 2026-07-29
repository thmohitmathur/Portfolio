const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a href="https://github.com/thmohitmathur" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/thmohitmathur" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://twitter.com/thmohitmathur" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Mohit Kumar Mathur. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
