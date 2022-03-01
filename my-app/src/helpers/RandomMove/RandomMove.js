import react from 'react'
import { useEffect, useState } from 'react'
import $ from 'jquery'
import { Button } from 'react-bootstrap'

import './RandomMove.scss'


const RandomMove = () => {
const [diva, setDiva] = useState(true)
const [divb, setDivb] = useState(true)
const [divc, setDivc] = useState(true)
const [divd, setDivd] = useState(true)
// Thank you to Amit Rogye --> https://codepen.io/cooljockey/pen/yLjXYz
useEffect(() => {
$(document).ready(function(){
    animateDiv('.a');
    animateDiv('.b');
    animateDiv('.c');
    animateDiv('.d');
});
})

const makeNewPosition = () => {
    // Get viewport dimensions (remove the dimension of the div)
    const h = $(window).height() - 50;
    const w = $(window).width() - 50;

    const nh = Math.floor(Math.random() * h)
    const nw = Math.floor(Math.random() * w)

    return [nh,nw]

}

const animateDiv = (myclass) => {
    const newq = makeNewPosition()
    $(myclass).animate({ top: newq[0], left: newq[1] }, 8000,   function(){
      animateDiv(myclass)
    })
}

 const handleClick = (id) => {
   console.log(id + 'this is the ID')
   console.log(divd)
   if (divd) {
       $(id).stop()
       setDivd(false)
   }
   else {
     console.log('start')
     animateDiv(id)
     setDivd(true)
   }
 }
 const handleStop = (id) => $(id).stop()
 const handleStart = (id) => animateDiv(id)

  return (
    <div>
        <div className='a'>
          <Button
            className='circle-button'
            href='https://github.com/GMorse19'
            target="_blank" onMouseLeave={() => handleStart('.a')} onMouseEnter={() => handleStop('.a')}>Github</Button>
        </div>
      <div className='b'>
        <Button className='circle-button' onMouseLeave={() => handleStart('.b')} onMouseEnter={() => handleStop('.b')}>Stop</Button>
      </div>
      <div className='c'>
        <Button className='circle-button' onMouseLeave={() => handleStart('.c')} onMouseEnter={() => handleStop('.c')}>Stop</Button>
      </div>
      <div className='d'>
        <Button className='circle-button' onMouseLeave={() => handleStart('.d')} onMouseEnter={() => handleStop('.d')}>Start</Button>
      </div>
    </div>
  )
}

export default RandomMove
