import react from 'react'

import  './ExplodingBall.scss'

const ExplodingBall = (props) => {
  // console.log(props.diameter)

  return (
    <div>
      <section className='explodingStage' style={{ width: 300, height: 300 }}>
        <figure style={{ animation: `bubble-anim 2s ease-out infinite` }} className="explodingBall bubble"><span  className='eight'></span></figure>
      </section>
    </div>
  )
}

export default ExplodingBall
