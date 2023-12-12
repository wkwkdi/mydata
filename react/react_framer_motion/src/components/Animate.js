import {motion} from "framer-motion"
import "./Animate.css"
import { useState } from "react";

const boxVariants = {
    start:{opacity:0, scale:0},
    end:{opacity:1, scale:1,rotateZ:360,transition:{type:"spring",}},
    exit:{opacity:0, scale:0, rotateZ:-360},
};

export function Animate(){
    const [showing, setShowing] = useState(false);
    function onClick() {
        setShowing((showing)=> !showing);
    }
    return (
      <>
        <div className="container">
            {showing ? (
          <motion.div className="box"
            variants={boxVariants}
            initial="start"
            animate="end"
            exit="exit"
          ></motion.div>
          ):null}
          <button onClick={onClick}>Click Me</button>
        </div>
      </>
    );
  }