import react from 'react'
import { useEffect, useState } from 'react'
import $ from 'jquery'
import { Button } from 'react-bootstrap'

import './RandomMove.scss'


const RandomMove = () => {

$(document).ready(function(){
    animateDiv('.a');
    animateDiv('.b');
    animateDiv('.c');
});

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
    $(myclass).animate({ top: newq[0], left: newq[1] }, 2000,   function(){
      animateDiv(myclass)
    })
}

 const handleClick = () => animateDiv('.d')
 const handleStop = () => $('.d').stop()

  return (
    <div>
    <div className='d'><Button onClick={handleClick}>Start</Button></div>
    <div className='a'><Button onClick={handleStop}>Stop</Button></div>

      <div className='b'></div>
      <div className='c'></div>

    </div>
  )
}

export default RandomMove
