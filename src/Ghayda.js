
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Button, Card } from "antd";

import TooltipPopover from "./TooltipPopover";
import Image from "./Image";
import Portal from "./Portal";

const btnRef = React.createRef();
const Ghayda = () => {
  const [isOn, setOn] = useState(false); // toggles dropdown visibility
  const [coords, setCoords] = useState({}); // takes current button coordinates

  const updateTooltipCoords = button => {
    const rect = button.getBoundingClientRect();
    setCoords({
      left: rect.x + rect.width / 2, // add half the width of the button for centering
      top: rect.y + window.scrollY // add scrollY offset, as soon as getBountingClientRect takes on screen coords
    });
  };





  

  return (
    <>
      <Button
        ref={btnRef}
        style={styles.button}
        onClick={e => {
          updateTooltipCoords(e.target);
          setOn(!isOn);
        }}
      >
        Ghayda
      </Button>
      {isOn && (
        <Portal>
          <TooltipPopover
            coords={coords}
            updateTooltipCoords={() =>
              updateTooltipCoords(btnRef.current.buttonNode)
            }
          >
            <div>
                فوق ما انا تعبانة كمان بخلوني انا اصور واطلع من الصورة ههههه
                note: I'm gonna miss you
            </div>
          </TooltipPopover>
        </Portal>
      )}


</>

  );
};

const styles = {
  card: { padding: 100, maxWidth: 2500, margin: "" },
  button: { display: "flex", marginLeft: "auto", marginBottom: 12, top:100, right:640 }
};

ReactDOM.render(<Ghayda />, document.getElementById("react-root"));

export default Ghayda
