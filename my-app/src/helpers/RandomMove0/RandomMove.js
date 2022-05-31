import react from 'react'
import { useEffect, useState, useRef } from 'react'
import $ from 'jquery'
import { Button } from 'react-bootstrap'

import './RandomMove0.scss'

import AboutModal from '../../Components/AboutModal/AboutModal'
import Ball from '../../Components/Ball/Ball'


const RandomMove = (props) => {
const [diva, setDiva] = useState(true)
const [divb, setDivb] = useState(true)
const [divc, setDivc] = useState(true)
const [divd, setDivd] = useState(true)
const [height, setHeight] = useState(0)
const [width, setWidth] = useState(0)

const ref = useRef(null)

// Thank you to Amit Rogye --> https://codepen.io/cooljockey/pen/yLjXYz
// The animation for the buttons was based largely on Amit's codepen
useEffect(() => {
setHeight(ref.current.clientHeight)
setWidth(ref.current.clientWidth)
$(document).ready(function(){
    animateDiv('.a');
    animateDiv('.b');
    animateDiv('.c');
    animateDiv('.d');
});
})

const makeNewPosition = () => {
    // Get viewport dimensions (remove the dimension of the div)
    // const h = height;
    // const w = width - 50;
    const w = $(window).width() - 200;
    const h = $(window).height() - 200; // orginally 50

    const nh = Math.floor(Math.random() * h)
    const nw = Math.floor(Math.random() * w)

    return [nh,nw]

}

const animateDiv = (myclass) => {
    const newq = makeNewPosition()
    $(myclass).animate({ top: newq[0], left: newq[1] }, 10000,   function(){
      animateDiv(myclass)
    })
}

 const handleStop = (id) => $(id).stop()
 const handleStart = (id) => animateDiv(id)

  return (
    <div className='rando-wrapper' ref={ref} id=''>

        <div className='a'>
          <Ball
            diameter= '100'
            speed= '3'
          />
        </div>

        <div className='b'>
          <Ball
            diameter= '150'
            speed= '2'
          />
        </div>

        <div className='c'>
          <Ball
            diameter= '70'
            speed= '1'
          />
        </div>

        <div className='d'>
          <Ball
            diameter= '200'
            speed= '5'
          />
        </div>
    </div>
  )
}

export default RandomMove
