import "./style.css";

const DropDown = () => {
  return (
    <div>
      <select className="select">
        <option value="Full access" className="option">
          Full access
        </option>
        <option value="Can edit" className="option">
          Can edit
        </option>
        <option value="Can view" className="option">
          Can view
        </option>
        <option value="No access" className="option">
          No access
        </option>
      </select>
    </div>
  );
};

export default DropDown;
