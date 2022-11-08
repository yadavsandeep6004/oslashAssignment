import img1 from "../../image/img1.svg";
import img2 from "../../image/img2.svg";
import "./style.css";
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img src={img1} alt="img" />
        <p>learn about sharing</p>
      </div>
      <div>
        <img src={img2} alt="img2" />
        <p>Copy link</p>
      </div>
    </div>
  );
};

export default Footer;
