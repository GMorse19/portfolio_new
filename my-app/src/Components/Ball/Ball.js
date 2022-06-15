import react from 'react'

import  './Ball.scss'

const Ball = (props) => {
  // console.log(props.diameter)

  return (
    <div>
      <section className='stage' style={{ width: parseInt(props.diameter), height: parseInt(props.diameter) }}>
        <figure style={{ animation: `bubble-anim ${props.speed}s ease-out infinite` }} className="ball bubble"><span  className='eight'></span></figure>
      </section>
    </div>
  )
}

export default Ball
