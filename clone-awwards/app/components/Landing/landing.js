"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import style from "./landing.module.css"
import { motion } from "framer-motion"
import { ScrollTrigger } from 'gsap/all';
import { slideUp } from "./animation"


export default function Landing() {
    const first = useRef(null)
    const second = useRef(null)
    const slider = useRef(null)

    let xPercent = 0
    let direction = -1

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(slider.current, {
            scrollTrigger: {
              trigger: document.documentElement,
              scrub: 0.25,
              start: 0,
              end: window.innerHeight,
              onUpdate: e => direction = e.direction * -1
            },
            x: "-500px",
          })
        requestAnimationFrame(animate)
    },[])

    const animate = () => {
        if(xPercent < -100){
          xPercent = 0;
        }
        else if(xPercent > 0){
          xPercent = -100;
        }
        gsap.set(first.current, {xPercent: xPercent})
        gsap.set(second.current, {xPercent: xPercent})
        requestAnimationFrame(animate);
        xPercent += 0.1 * direction;
      }
    return (
        <motion.main variants={slideUp} inherit="inherit" animate="enter" className={style.main}>
            <div className={style.sliderContainer}>
                <div ref={slider} className={style.slider}>
                    <p ref={first}>프론트엔드 개발자 -</p>
                    <p ref={second}>프론트엔드 개발자 -</p>
                </div>
            </div>
        </motion.main>
    )
}