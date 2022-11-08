import "./style.css";

const SelectPerson = ({ Avatar, name, children }) => {
  return (
    <div className="SelectPerson">
      <div className="SelectPerson-avatar">
        {
          Avatar &&  <img src={Avatar} alt="Avatar" />
        }
       
        <span>{name}</span>
      </div>
      {children && children}
    </div>
  );
};
export default SelectPerson;
