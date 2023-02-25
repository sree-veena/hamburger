// Write your code here
import Popup from 'reactjs-popup'

import {Link} from 'react-router-dom'

import 'reactjs-popup/dist/index.css'

import {GiHamburgerMenu} from 'react-icons/gi'

import {IoMdClose} from 'react-icons/io'

import {AiFillHome} from 'react-icons/ai'

import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>
    <>
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="btn"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="icon" />
          </button>
        }
        // className="popup-content"
      >
        {close => (
          <div className="popup-container">
            <button
              type="button"
              className="trigger-button btn"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose className="icon" />
            </button>
            <ul className="btn-container">
              <Link to="/" className="link-item" onClick={() => close()}>
                <li className="link-btn">
                  <AiFillHome className="link-icon" />
                  Home
                </li>
              </Link>
              <Link to="/about" className="link-item" onClick={() => close()}>
                <li className="link-btn">
                  <BsInfoCircleFill className="link-icon" />
                  About
                </li>
              </Link>
            </ul>
          </div>
        )}
      </Popup>
    </>
  </nav>
)

export default Header
