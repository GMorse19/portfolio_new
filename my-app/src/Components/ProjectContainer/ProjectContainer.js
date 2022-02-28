import react from 'react'
import { Col } from 'react-bootstrap'

import './ProjectContainer.scss'

const ProjectContainer = (props) => (
  <Col lg={{ offset: props.offset }}>
  <div className='project-container-wrapper' style={{ backgroundImage: `url(${props.image})`}}>
    <div className='overlay'>
      <div className='project'>
        <div className='head'>
          <p>{props.title}</p>
        </div>
        <div className='project description'>
          <p>{props.description}</p>
        </div>
        <div className='project links'>
          <a href={props.siteUrl}>
            <i class="icon-rocket"></i>
          </a>
          <a href={props.github}>
            <i class="icon-social-github"></i>
          </a>
          <a href='https://www.linkedin.com/in/geoff-morse19/'>
            <i class="icon-social-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
</div>
  </Col>
)

export default ProjectContainer
