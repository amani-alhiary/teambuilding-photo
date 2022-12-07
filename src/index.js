import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Button, Card } from "antd";

import TooltipPopover from "./TooltipPopover";
import Image from "./Image";
import Portal from "./Portal";
import Button2 from './Button2'
import Majdsh from './Majdsh'
import Majdatt from "./Majdatt";
import Nancy from "./Nancy";
import Duaa from "./Duaa";
import Jameel from "./Jameel";
import Hasan from "./Hasan";
import Qassem from "./Qassem";
import Hamze from "./Hamze";
import Emran from "./Emran";
import Mohammed from "./Mohammed";
import Ziad from "./Ziad";
import Ghayda from "./Ghayda";
const btnRef = React.createRef();
const App = () => {
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
    <Card style={{ ...styles.card }}>
      <Image />
      <Button
        ref={btnRef}
        style={styles.button}
        onClick={e => {
          updateTooltipCoords(e.target);
          setOn(!isOn);
        }}
      >
        Osaid
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
              مطور التاسكات القادمة من المريخ
              وبحب السلط اكثر من امي وابوي
            </div>
          </TooltipPopover>
        </Portal>
      )}

   <Button2/>
    <Majdsh/>
    <Majdatt/>
<Nancy/>
<Duaa/>
<Jameel/>
<Hasan/>
<Qassem/>
<Hamze/>
<Emran/>
<Mohammed/>
<Ziad/>
<Ghayda/>
    </Card>
  );
};

const styles = {
  card: { padding: 100, maxWidth: 2500, margin: "" },
  button: { display: "flex", marginLeft: "auto", marginBottom: 12, top:420, right:950 }
};

ReactDOM.render(<App />, document.getElementById("react-root"));
