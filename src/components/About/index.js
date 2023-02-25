// Write your code here
import Header from '../Header'

import './index.css'

const About = () => (
  <div className="bg">
    <Header />
    <div className="about-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="icon-sm"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="icon-lg"
      />
    </div>
  </div>
)

export default About
