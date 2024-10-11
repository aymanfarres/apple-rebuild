import React, { useRef } from 'react'
import Countainer from './Countainer'
import Btn from './Btn'
import { motion, useScroll, useTransform } from 'framer-motion'

const Hero = () => {
  const videoContainerRef= useRef<HTMLDivElement>(null)
  const{scrollYProgress}= useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"]
  }
  )
  const opacity=useTransform(scrollYProgress, [0, 0.7, 1], [1, 1,0])


  return (
    <div className='relative  bg-background '>
       <motion.div
       style={{opacity}}
       
       ref={videoContainerRef} className='absolute top-0 left-0 w-full h-[200vh] '>
      <img   src="/posters/poster.webp" className='w-full sticky top-0 h-screen object-cover '/>

       </motion.div>
      <Countainer className='text-white pb-7 relative z-10 h-[--hero-height]  '>
        <motion.div
        className='flex h-full flex-col justify-end items-start'
        variants={{
          hidden: {opacity:0 },
          visible:{opacity:1}
        }}
        whileInView="visible"
        exit="hidden"
        animate="hidden"
        viewport={{amount:0.9}}
        >
        <h1 className='text-5xl mb-10 font-bold '>All Apple Originals.<br/>
             Only on Apple Tv+</h1>
        <Btn size='lg' className='mb-16'>Stream Now</Btn>
        <p className='font-semibold '>Watch on the Apple Tv app.</p>
        </motion.div>
      </Countainer>
    </div>
  )
}

export default Hero
