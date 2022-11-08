import Button from "../commponents/Button";

const Frame1 = ({ onSet }) => {
  return (
    <div onClick={() => onSet(2)}className='frame1' >
      <Button />
    </div>
  );
};
export default Frame1;
