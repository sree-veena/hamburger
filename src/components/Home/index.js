// Write your code here
import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="bg">
    <Header />
    <div className="home-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="icon-sm"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="icon-lg"
      />
    </div>
  </div>
)

export default Home
