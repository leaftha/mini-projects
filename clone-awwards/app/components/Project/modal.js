import Image from "next/image";
import styles from "./modal.module.css";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    closed: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function index({ modal, projects }) {
  const { active, index } = modal;
  const container = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    const moveCursorX = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const moveCursorY = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    const moveCursorLablerX = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const moveCursorLablerY = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      console.log(clientX,clientY)
      moveContainerX(clientX);
      moveContainerY(clientY);
      moveCursorX(clientX);
      moveCursorY(clientY);
      moveCursorLablerX(clientX);
      moveCursorLablerY(clientY);
    });
  }, []);

  return (
    <>
      <motion.div
        ref={container}
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        className={styles.modalContainer}
      >
        <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
          {projects.map((project, idx) => {
            const { src, color } = project;
            return (
              <div
                key={idx}
                style={{ backgroundColor: color }}
                className={styles.modal}
              >
                <Image
                  src={`/images/${src}`}
                  width={300}
                  height={9}
                  alt="image"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        className={styles.cursor}
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        className={styles.cursorLabel}
      >
        View
      </motion.div>
    </>
  );
}
