import react from 'react'

import './StaticLinks.scss'

import AboutModal from '../AboutModal/AboutModal'

const StaticLinks = (props) => (
  <div className='static-links-container'>
    <AboutModal
      type='a'
      image={<i className="icon-user static-links-icon" title='about me'></i>}
    />
    <a className='static-links-a' href='https://github.com/GMorse19' target='_blank'>
      <i class="icon-social-github static-links-icon" title='Gitub'></i>
    </a>
    <a className='static-links-a' href='https://www.linkedin.com/in/geoff-morse19/' target='_blank'>
      <i class="icon-social-linkedin static-links-icon" title='LinkedIn'></i>
    </a>
  </div>
)

export default StaticLinks
