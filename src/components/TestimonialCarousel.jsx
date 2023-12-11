import Card from "./ui/Card/Card.jsx"
import logo from "../assets/logo.svg"

import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"

function Testimonials({ data }) {
  const [width, setWidth] = useState(0)
  const carousel = useRef()

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  const testimonialElem = data.map(data => {
    return (
      <Card
        key={data.id}
        {...data}
      />
    )
  })

  return (
    <>
      <div className="testimonial">
        <div className="testimonial__title">
          <h2 className="testimonial__heading">Testimonials</h2>
          <hr></hr>
        </div>
        <img src={logo} className="logo"></img>
        <motion.div ref={carousel} className="carousel__container" whileTap={{ cursor: "grabbing" }}>
          <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="carousel__inner">
            <motion.div className="carousel__track">
              {testimonialElem}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

    </>
  )
}

export default Testimonials
