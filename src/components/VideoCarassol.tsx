import { useScroll, useTransform, motion } from 'framer-motion';
import {  movies } from "./mouvies";
import { useRef } from 'react';

const VideoCarassol = () => {
  const carouselWrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start start", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0.3, 0.5, 0.66], [3, 1.5, 1]);

  return (
    <div ref={carouselWrapperRef} className="bg-background">
      <div className="overflow-clip mt-[-100vh] h-[200vh]">
        <div className="h-screen sticky top-0 flex items-center">
          <div className="relative flex left-1/2 -translate-x-1/2 mb-5 gap-5">
            {/* Poster with opacity animation */}
            <motion.div 
              className="shrink-0 aspect-video overflow-clip w-[60vw] rounded-2xl">
              <img className="h-full w-full" src={movies[0].poster} alt={movies[0].name} />
            </motion.div>

            {/* Poster with scale animation */}
            <motion.div
              style={{ scale }}
              className="shrink-0 overflow-clip w-[60vw] rounded-2xl">
              <img className="h-full w-full" src={movies[1].poster} alt={movies[1].name} />
            </motion.div>

            {/* Poster with opacity animation */}
            <motion.div
              className="shrink-0 overflow-clip w-[60vw] rounded-2xl">
              <img className="h-full w-full" src={movies[2].poster} alt={movies[2].name} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCarassol;
