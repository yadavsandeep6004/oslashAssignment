import logo from "../../image/logo.svg";
import DropDown from "../DropDown";

const Member = () => {
  return (
    <div>
      <div className="card-header">
        <div className="card-header-text">
          <img src={logo} alt="img" />
          <div>
            <h3>Everyone at OSlash</h3>
            <p>25 workspace members</p>
          </div>
        </div>
        <div>
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default Member;
