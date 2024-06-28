'use client'
import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import Nav from "./nav"
import style from "./style.module.scss"

export default function Index() {
    const [isActive, setIsActive] = useState(false)


    use
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <div className={style.copyright}>©</div>
                <div></div>
            </div>
            <div className={style.headerButtonContainer}>
                <div onClick={() => setIsActive(!isActive)} className={style.button}>
                    <div className={`${style.burger} ${isActive ? style.burgerActive : ""}`}></div>
                </div>
            </div>
            <AnimatePresence>
                {isActive && <Nav/>}
            </AnimatePresence>
        </div>
    )
}