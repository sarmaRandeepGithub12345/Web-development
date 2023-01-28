import React from 'react'
import Mycard from './Mycard.js'
import './Imagecarousel.css'
import { useRef } from 'react'

const Imagecarousel = () => {
    let box = document.querySelector('.product-container');
    const ref = useRef(null); //ref to parent div

    const btnpressprev = () => {
      let width = ref.current.clientWidth;
      console.log(width)
      console.log("ref.current.scrollLeft:",ref.current.scrollLeft)
      ref.current.scrollLeft = ref.current.scrollLeft - width;
      console.log("ref.current.scrollLeft:",ref.current.scrollLeft)
      
    };
    const btnpressnext = () => {
      let width = ref.current.clientWidth;
      console.log(width)
      console.log("ref.current.scrollLeft:",ref.current.scrollLeft)
      ref.current.scrollLeft = ref.current.scrollLeft + width;
      console.log("ref.current.scrollLeft:",ref.current.scrollLeft)
    };
    return (
        <div className="product-carousel">
            <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
            <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>


            <div className="product-container" ref={ref}>
                <Mycard cardno='1' />
                <Mycard cardno='2' />
                <Mycard cardno='3' />
                <Mycard cardno='4' />
                <Mycard cardno='5' />
                <Mycard cardno='6' />
                <Mycard cardno='7' />
                <Mycard cardno='8' />
                <Mycard cardno='9' />
                <Mycard cardno='10' />
                <Mycard cardno='11' />
                <Mycard cardno='12' />
                <Mycard cardno='13' />
            </div>
        </div>
    )
}

export default Imagecarousel