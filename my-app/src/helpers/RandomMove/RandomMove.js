import react from 'react'
import { useEffect, useState } from 'react'
import $ from 'jquery'
import { Button } from 'react-bootstrap'

import './RandomMove.scss'

import AboutModal from '../../Components/AboutModal/AboutModal'


const RandomMove = (props) => {
const [diva, setDiva] = useState(true)
const [divb, setDivb] = useState(true)
const [divc, setDivc] = useState(true)
const [divd, setDivd] = useState(true)

// Thank you to Amit Rogye --> https://codepen.io/cooljockey/pen/yLjXYz
// The animation for the buttons was based largely on Amit's codepen
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
    $(myclass).animate({ top: newq[0], left: newq[1] }, 10000,   function(){
      animateDiv(myclass)
    })
}

 const handleStop = (id) => $(id).stop()
 const handleStart = (id) => animateDiv(id)

  return (
    <div>
        <div className='a'>
          <Button
            className='circle-button button-a btn'
            onMouseLeave={() => handleStart('.a')}
            onMouseEnter={() => handleStop('.a')}>
            <a href='https://github.com/GMorse19' target='_blank'>
              <i class="icon-social-github icon" title='Gitub'></i>
            </a>
          </Button>
        </div>
        <div className='b'>
          <AboutModal
            className='circle-button button-b'
            leave={() => handleStart('.b')}
            enter={() => handleStop('.b')}
            image={<i class="icon-user icon" title='about me'></i>}
          />
        </div>
        <div className='c'>
          <Button
            className='circle-button button-c'
            onMouseLeave={() => handleStart('.c')}
            onMouseEnter={() => handleStop('.c')}>
            <a href='https://www.linkedin.com/in/geoff-morse19/' target='_blank'>
              <i class="icon-social-linkedin icon" title='LinkedIn'></i>
            </a>
          </Button>
        </div>
        <div className='d'>
          <Button
            className='circle-button button-d'
            onMouseLeave={() => handleStart('.d')}
            onMouseEnter={() => handleStop('.d')}>
            <a href='https://github.com/GMorse19' target='_blank'>
             <i class="icon-book-open icon" title='resume'></i>
            </a>
          </Button>
        </div>
    </div>
  )
}

export default RandomMove
