'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
    const scrollRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ['start start', 'end end']
    })
    const scaleDiv = useTransform(scrollYProgress, [0, 1], [1, 2])
    const opacityDiv = useTransform(scrollYProgress, [0.98, 1], [1, 0])
    return ( 
    <section  ref={scrollRef} className="h-[150vh] w-full">
        <div className="sticky top-0 left-0 w-full h-[100vh] flex justify-center items-center">
            <motion.div 
            style={{
                scale: scaleDiv,
            }}
            initial={{
                width: '50vh',
                height: '50vh',
            }}
            className="bg-white p-4 text-black">
                <div className="w-full h-full flex flex-col justify-between">
                    <div className="w-full text-center font-semibold text-base">
                        <p>Example Example</p>
                        <p>+63963914223</p>
                        <p>example@curatecity.com</p>
                    </div>
                    <div className="w-full text-center">
                        <h1 className="text-4xl font-bold">CURAT(E)</h1>
                        <h3 className="text-xl font-normal">City</h3>
                    </div>
                    <div className="w-full text-center text-2xl">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <motion.div 
                        style={{opacity: opacityDiv}}
                        className="w-full text-center text-base font-medium">
                        <p>SCROLL DOWN</p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    </section>
  )
}