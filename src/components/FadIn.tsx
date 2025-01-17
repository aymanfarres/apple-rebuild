import { motion } from "framer-motion"

type Props={
  children: React.ReactNode;

  
}
const FadIn = ({children}:Props) => {
  return (
    <motion.div
     initial={{opacity:0, y:20}}
     whileInView={{opacity:1, y:20}}    
     viewport={{margin:"10% 0px -100px 0px"}}
    >
      {children}
    </motion.div>
  )
}

export default FadIn
