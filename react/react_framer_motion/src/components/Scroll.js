import { useRef } from "react";
import "./Scroll.css"
import {motion, useScroll} from "framer-motion"
export function Scroll(){
    const { scrollYProgress }= useScroll();
    return(
    <>
        <div className="container">
            <motion.div className="bar" style={{scaleX:scrollYProgress}}/>
            <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed arcu at quam luctus laoreet. Proin volutpat at nunc in ultrices. Proin eget leo commodo, luctus est nec, sodales augue. Vivamus varius odio sit amet efficitur tristique. Maecenas vel consequat magna. Fusce tortor sem, laoreet sit amet consequat laoreet, laoreet non sem. Maecenas nec velit at tellus volutpat pretium. In sit amet consequat nisl. Pellentesque vulputate, nibh sed euismod egestas, odio risus vestibulum tellus, at lobortis odio leo id mauris. Aliquam at elit eros.</p>
            </div>
            <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed arcu at quam luctus laoreet. Proin volutpat at nunc in ultrices. Proin eget leo commodo, luctus est nec, sodales augue. Vivamus varius odio sit amet efficitur tristique. Maecenas vel consequat magna. Fusce tortor sem, laoreet sit amet consequat laoreet, laoreet non sem. Maecenas nec velit at tellus volutpat pretium. In sit amet consequat nisl. Pellentesque vulputate, nibh sed euismod egestas, odio risus vestibulum tellus, at lobortis odio leo id mauris. Aliquam at elit eros.</p>
            </div>
            <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed arcu at quam luctus laoreet. Proin volutpat at nunc in ultrices. Proin eget leo commodo, luctus est nec, sodales augue. Vivamus varius odio sit amet efficitur tristique. Maecenas vel consequat magna. Fusce tortor sem, laoreet sit amet consequat laoreet, laoreet non sem. Maecenas nec velit at tellus volutpat pretium. In sit amet consequat nisl. Pellentesque vulputate, nibh sed euismod egestas, odio risus vestibulum tellus, at lobortis odio leo id mauris. Aliquam at elit eros.</p>
            </div>
            <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed arcu at quam luctus laoreet. Proin volutpat at nunc in ultrices. Proin eget leo commodo, luctus est nec, sodales augue. Vivamus varius odio sit amet efficitur tristique. Maecenas vel consequat magna. Fusce tortor sem, laoreet sit amet consequat laoreet, laoreet non sem. Maecenas nec velit at tellus volutpat pretium. In sit amet consequat nisl. Pellentesque vulputate, nibh sed euismod egestas, odio risus vestibulum tellus, at lobortis odio leo id mauris. Aliquam at elit eros.</p>
            </div>
            <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed arcu at quam luctus laoreet. Proin volutpat at nunc in ultrices. Proin eget leo commodo, luctus est nec, sodales augue. Vivamus varius odio sit amet efficitur tristique. Maecenas vel consequat magna. Fusce tortor sem, laoreet sit amet consequat laoreet, laoreet non sem. Maecenas nec velit at tellus volutpat pretium. In sit amet consequat nisl. Pellentesque vulputate, nibh sed euismod egestas, odio risus vestibulum tellus, at lobortis odio leo id mauris. Aliquam at elit eros.</p>
            </div>
            <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed arcu at quam luctus laoreet. Proin volutpat at nunc in ultrices. Proin eget leo commodo, luctus est nec, sodales augue. Vivamus varius odio sit amet efficitur tristique. Maecenas vel consequat magna. Fusce tortor sem, laoreet sit amet consequat laoreet, laoreet non sem. Maecenas nec velit at tellus volutpat pretium. In sit amet consequat nisl. Pellentesque vulputate, nibh sed euismod egestas, odio risus vestibulum tellus, at lobortis odio leo id mauris. Aliquam at elit eros.</p>
            </div>
        </div>
    </>
    )
}