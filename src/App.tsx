import { useState } from "react";
import "./App.css";
import { Keyhole } from "./keyhole";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="App">
      <div
        style={{
          width: toggle ? "50vh" : "100vw",
          height: toggle ? "50vh" : "",
          position: "fixed",
          top: toggle ? "40%" : "0",
          bottom: toggle ? "" : "0",
          translate: toggle ? "-50% -50%" : "-50%",
          transition: "all 1s",
        }}
      >
        <Keyhole isKeyhole={toggle} />
      </div>
      <button
        style={{
          position: "fixed",
          top: "1%",
          translate: "-50%",
        }}
        onClick={() => setToggle(!toggle)}
      >
        Toggle: {toggle ? "On" : "Off"}
      </button>
    </div>
  );
}

export default App;
