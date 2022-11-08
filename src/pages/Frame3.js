import InputBox from "../commponents/InputBox";
import DropDown from "../commponents/DropDown";
import { useState } from "react";
import Footer from "../commponents/Footer";
import { PERSON } from "../data";
import close from "../image/close.svg";

const Frame3 = ({ onSet, setdata }) => {
  const [user, setuser] = useState([...PERSON]);
  const [filterarr, setFilterarr] = useState([]);
  const [text, setText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const listArr = user.map((ele) => ele.name.toLowerCase());

    if (listArr.includes(text.toLowerCase())) {
      let arr = user.filter(
        (item) => item.name.toLowerCase() === text.toLowerCase()
      );

      setFilterarr((prev) => [...prev, ...arr]);

      const filtername = filterarr.map((ele) => ele.name.toLowerCase());
      setuser((prev) =>
        PERSON.filter((item) => !filtername.includes(item.name.toLowerCase()))
      );

      setText("");
    }
  };

  const invite = () => {
    setdata(filterarr);
    onSet(4);
  };

  const deleteUser = (e, name) => {
    if (e.target.alt === "close") {
      let arr = filterarr.filter((currEle) => currEle.name !== name);
      setFilterarr(arr);
      console.log("======");
    }
  };

  return (
    <div className="frame3">
      <form onSubmit={submitHandler}>
        <div>
          <div>
            {filterarr.map((item, i) => (
              <div key={i} className="close-box inline-block">
                <div>
                  <span>{item.name}</span>
                  <button>
                    <img
                      src={close}
                      alt="close"
                      onClick={(e) => deleteUser(e, item.name)}
                    />
                  </button>
                </div>
              </div>
            ))}
            <InputBox value={text} onChange={(e) => setText(e.target.value)}>
              <div className="down">
                <DropDown />
              </div>
              <div className="select-person">
                <span> Select a Person</span>
                {user.map((item, i) => (
                  <p key={i} className="user-name-line">
                    {item.name}
                  </p>
                ))}
              </div>
            </InputBox>
          </div>
          <div className="textarea-box">
            <textarea placeholder="Sandeep Shared Page"></textarea>
          </div>
        </div>
      </form>
      <button className="btn left" onClick={invite}>
        Invite
      </button>
      <Footer />
    </div>
  );
};
export default Frame3;
