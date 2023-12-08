import { useRef } from "react";
import "./Gesture.css";
import { motion } from "framer-motion"

const gestureVariant = {
    hover: {
        scale:1.2, rotateZ:90,
    },
    tap:{
        scale:0.8, ratateZ:-90, borderRadius:"50%"
    },
    drag:{
        backgroundColor:"rgb(46,204,113)"
    }

}

export function Gesture() {
    //useRef는 리액트의 후크 중의 하나로서 
    //1.상태저장을 하되 화면렌더링을 발생시키지 않을 목적으로 사용함 
    //2. real dom의 객체요소에 직접 접근하기 위해 사용함
    const biggerBoxRef = useRef();

    return <>
        <div className="container">
            <div className="biggerBox" ref={biggerBoxRef}>
                <motion.div className="box"
                variants={gestureVariant}
                    drag 
                    // dragConstraints={biggerBoxRef}
                    dragConstraints={{top:-225, left:-425, right:424, bottom:225}}
                    whileHover="hover"
                    whileTap="tap"
                    whileDrag="drag"
                ></motion.div>
            </div>
        </div>
    </>
}