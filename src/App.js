import "./styles.css";
import { useState } from "react";
import Frame1 from "./pages/Frame1";
import Frame2 from "./pages/Frame2";
import Frame3 from "./pages/Frame3";
import Frame4 from "./pages/Frame4";
import Frame5 from "./pages/Frame5";

export default function App() {
  const [count, setCount] = useState(1);
  const [data, setdata] = useState([]);

  const COM = {
    1: <Frame1 onSet={setCount} />,
    2: <Frame2 onSet={setCount} />,
    3: <Frame3 onSet={setCount} setdata={setdata} data={data} />,
    4: <Frame4 onSet={setCount} setdata={setdata} data={data} />,
    5: <Frame5 onSet={setCount} data={data} />
  };

  return <div className="App">{COM[count]}</div>;
}
