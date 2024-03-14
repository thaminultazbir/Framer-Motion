import {motion} from "framer-motion"

const Test = () =>{
    return(
        <div className="course">
            <motion.div className="box"
            initial={{opacity:0.5, scale:0.5}}
            // animate={{opacity:1, scale:1}}
            transition={{duration:5}}
            whileDrag={{opacity:1, scale:2}}
            drag></motion.div>
        </div>
    )
}

export default Test