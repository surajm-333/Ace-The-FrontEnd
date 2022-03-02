import React from 'react';
{/** Imported motion to add animation the images */}
import { motion } from "framer-motion"

const Background = () => {
	{/** Made functions that have instructions for particular animation */}
	const Dad ={
		initial: {
			y: -850,
		},
		animate: {
			y: 0,
			transition: {
 
			  	duration: 0.4,
			  	type: "spring",
			},
		},
	};
	const Mom ={
		initial: {},
  		animate: {
    			transition: {
      				delayChildren: 1,
      				staggerChildren: 0.5,
    			},
  		},
 
	}
	const Svg = {
		initial: {
			y: 0,
		},
		animate: {
			y: [20, 0, 20],
			transition: {
			  duration: 5,
			  ease: "linear",
			  repeat: Infinity,
			},
		},
	};
	const Svg1 = {
		initial: {
			y: 20,
			
		},
		animate: {
			y: [0, 20, 0],
			
			transition: {
			  duration: 5,
			  ease: "linear",
			  repeat: Infinity,
			},
		},
	};
	const Svg2 = {
		initial: {
			x: 20,
			
		},
		animate: {
			x: [0, 20, 0],
			
			transition: {
			  duration: 5,
			  ease: "linear",
			  repeat: Infinity,
			},
		},
	};
	return(
		<div className="w-full ">
			{/** chaning div to motion.div to implement the animations */}
			<motion.div variants={Mom} initial="initial" animate="animate" className=" w-full -z-5">
				<img src="/images/ellipse1.svg"  className="absolute ml-[15rem] z-0 animate-pulse"/>
				<img src="/images/ellipse2.svg" className="absolute ml-[86rem] mt-[5rem] animate-pulse  delay-300"/>
				<img src="/images/ellipse3.svg" className="absolute mt-[32rem] z-0 animate-pulse delay-500"/>
				<img src="/images/ellipse4.svg" className="absolute ml-[70rem] mt-[42rem] animate-pulse delay-700"/>
				<motion.div variants={Dad}>
					<motion.img variants={Svg} src="/images/ellipse5.svg" className="absolute mt-[10rem] "/>
				</motion.div>
				<motion.div variants={Dad}>
					<motion.img variants={Svg1} src="/images/ellipse5.svg" className="absolute mt-[10rem] "/>
				</motion.div>
				<motion.div variants={Dad}>
					<motion.img variants={Svg2} src="/images/star1.svg" className="absolute ml-[65rem] mt-[15rem] animate-pulse "/>
				</motion.div>
				<motion.div variants={Dad}>
					<motion.img variants={Svg2} src="/images/star2.svg" className="absolute ml-[62rem] mt-[40rem] animate-pulse  "/>
				</motion.div>
			</motion.div>
		</div>
	)
}

export default Background