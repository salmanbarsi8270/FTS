import React from "react"
import { motion, useAnimation, useInView } from "framer-motion"

export const ScrollFadeIn: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ className = "", children }) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [inView, controls])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
