import "./Footer.scss";
import Payment from "../../assets/payments.png";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            delectus nesciunt eveniet, alias rerum, ex architecto molestias
            esse, in iste?
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Rabia Petal Apartments, Karachi</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: +923173775920</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: arafay493@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Catagories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Blutooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theaters</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms and Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            EStore 2023 is created by Abdul Rafay. Premium Ecommerce Solutions
          </div>
          <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
