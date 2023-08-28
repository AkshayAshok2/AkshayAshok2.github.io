import { styles } from '../styles'; // Create this CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>Akshay Ashok</p>
          <p>&copy; {new Date().getFullYear()} Your Company</p>
        </div>
        <div className="footer-right">
          {/* <a href="https://github.com/akshayashok2" target="_blank" rel="noopener noreferrer"> */}
            {/* <img src="/path/to/github-icon.png" alt="GitHub" /> */}
          {/* </a> */}
          {/* <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer"> */}
            {/* <img src="/path/to/linkedin-icon.png" alt="LinkedIn" /> */}
          {/* </a> */}
          {/* Add other social media links and icons here */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;