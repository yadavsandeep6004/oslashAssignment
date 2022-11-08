import "./style.css";

const InputBox = (props) => {
  return (
    <div className="input-box">
      <input
        type="text"
        placeholder="People, emails, groups"
        onChange={props.onChange}
        value={props.value}
      />
      {props.children ? props.children : <button>Invite</button>}
    </div>
  );
};

export default InputBox;
