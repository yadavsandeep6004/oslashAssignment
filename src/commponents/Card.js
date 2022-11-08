import Icon from "../image/Icon.svg";
import SwitchButton from "./SwitchButton.js";
import InputBox from "./InputBox";
import Member from "./Member";
import Footer from "./Footer";

const Card = ({ onSet,children }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-text">
          <img src={Icon} alt="img" />
          <div>
            <h3>Share to web</h3>
            <p>Publish and share link with anyone</p>
          </div>
        </div>
        <SwitchButton />
      </div>
      <div onClick={() => onSet(3)}>
        <InputBox />
      </div>

      <div>
        <Member />
      </div>
      { children && children}
      <Footer />
    </div>
  );
};

export default Card;
