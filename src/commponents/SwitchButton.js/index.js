import "./style.css";

const SwitchButton = () => {
  return (
    <div className="swtch-button">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default SwitchButton;
