/* eslint-disable jsx-a11y/control-has-associated-label */
// Write your code here
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import 'reactjs-popup/dist/index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <>
    <nav className="nav-container">
      <Link to="/">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            data-testid="hamburgerIconButton"
            className="btn"
            type="button"
          >
            <GiHamburgerMenu className="icon" />
          </button>
        }
      >
        {close => (
          <div>
            <div className="btn-container">
              <button
                data-testid="closeButton"
                type="button"
                className="cross-btn"
                onClick={() => close()}
              >
                <IoMdClose className="pop-up-icon cross-icon" />
              </button>
            </div>
            <ul className="inner-container">
              <li>
                <Link onClick={() => close()} className="link" to="/">
                  <div className="icon-container">
                    <AiFillHome className="pop-up-icon" />
                    <h1 className="pop-up-heading">Home</h1>
                  </div>
                </Link>
              </li>
              <li>
                <Link onClick={() => close()} className="link" to="/about">
                  <div className="icon-container">
                    <BsInfoCircleFill className="pop-up-icon" />
                    <h1 className="pop-up-heading">About</h1>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </nav>
    <hr />
  </>
)

export default Header
