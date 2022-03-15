import react from 'react'

import { Row, Col, Container } from 'react-bootstrap'

import './ProjectList.scss'

import ProjectContainer from '../ProjectContainer/ProjectContainer'

const ProjectList= (props) => (
<Row>
    <ProjectContainer
      title='Off Street Carpentry'
      description='Front End SPA, built with React.js'
      github='https://github.com/GMorse19/off-street'
      siteUrl='https://gmorse19.github.io/off-street/#/'
      image='/img/Off-Street.png'
      offset=''
    />
    <ProjectContainer
      title='Work From Roam'
      description='A group collaboration, built using React.js'
      github='https://github.com/sei-uxdi-collab/work_from_roam-client'
      siteUrl='https://sei-uxdi-collab.github.io/work_from_roam-client/#/'
      image='/img/WorkFromRoam.png'
      position='right'
      offset=''
    />
    <ProjectContainer
      title='Whats Your Problem?'
      description='Full stack SPA, built with React.js and Ruby on Rails'
      github='https://github.com/GMorse19/whats-your-problem-client'
      siteUrl='https://gmorse19.github.io/whats-your-problem-client/'
      image='/img/WYP.png'
      offset=''
    />
    <ProjectContainer
      title='Bee Hive'
      description='Full Stack SPA, built with Express.js, MongoDB'
      github='https://github.com/GMorse19/beehiveClient'
      siteUrl='https://gmorse19.github.io/beehiveClient/'
      image='/img/BeeHive.png'
      offset=''
    />
</Row>
)

export default ProjectList
