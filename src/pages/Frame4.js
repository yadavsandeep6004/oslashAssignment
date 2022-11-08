import Avatar from "../image/Avatar.png";
import close from "../image/close.svg";
import img1 from "../image/img1.svg";
import DropDown from "../commponents/DropDown";
import SelectPerson from "../commponents/SelectPerson";

const Frame4 = ({ onSet, setdata, data }) => {
  const dataHandler = (deleteUser) => {

    let arr = data.filter(item=>item.name !== deleteUser.name)
    setdata(arr);
  };

  return (
    <div className="frame4">
      <div className="close-box">
       {
         data.map((curele,i)=>{
           return(
            <div key={i}>
            <span>{curele.name}</span>
            <button onClick={()=>dataHandler(curele)}>
              <img src={close} alt="close" />
            </button>
          </div>
           )
         })
       }
        <div>
          <DropDown />
          <button className="invite-btn" onClick={() => onSet(5)}>
            Invite
          </button>
        </div>
      </div>
      <div className="avatar-box">
        <p>Select a person</p>
        {data.map((item,i)=><SelectPerson Avatar={Avatar} name={item.name} key={i} />)  }
      </div>
      <div className="avatar-box">
        <p>Select a Groups</p>
        {data.map((item,i)=><SelectPerson  name={item.group} key={i} />)  }
      </div>
      <div className="frame4-bottom">
        <img src={img1} alt="img1" />
        <span>learn about sharing</span>
      </div>
    </div>
  );
};
export default Frame4;
