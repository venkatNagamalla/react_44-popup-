// Write your code here
// Write your code here

import {Component} from 'react'
import Header from '../Header'
import './index.css'

class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="about-container">
          <img
            className="sm-about-logo"
            src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
            alt="about"
          />
          <img
            className="lg-about-logo"
            src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
            alt="about"
          />
        </div>
      </div>
    )
  }
}

export default About
