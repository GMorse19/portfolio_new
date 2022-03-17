import react from 'react'
import { useEffect, useState, useRef } from 'react'
import $ from 'jquery'
import { Button } from 'react-bootstrap'

import './RandomMove.scss'

import AboutModal from '../../Components/AboutModal/AboutModal'


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
    const w = $(window).width() - 50;
    const h = $(window).height() - 50;

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

console.log(height)
console.log(width)

  return (
    <div ref={ref} id=''>

        <div className='a'>
          <p>button a</p>
        </div>
        
        <div className='d'>
          <p>button d</p>
        </div>
    </div>
  )
}

export default RandomMove
