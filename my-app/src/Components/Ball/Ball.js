import react from 'react'

import  './Ball.scss'

const Ball = (props) => {
  console.log(props.diameter)

  return (
    <div>
    <p>{props.diameter}</p>
      <section className='stage' style={{ width: parseInt(props.diameter), height: parseInt(props.diameter) }}>
        <figure className="ball bubble"><span  className='eight'></span></figure>
      </section>
    </div>
  )
}

export default Ball
