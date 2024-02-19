// Write your code here

import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home-container">
          <img
            className="sm-home-logo"
            src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
            alt="home"
          />
          <img
            className="lg-home-logo"
            src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
            alt="home"
          />
        </div>
      </div>
    )
  }
}

export default Home
