import './Hero.css'
import arrow from '../assets/arrow.png'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaArrowTrendUp } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">

        <h2>NEW COLLECTION DROP</h2>

        <div>
          <p>Fresh styles curated for every moment</p>

        </div>

        <div className="hero-latest-btn">
          <div>Shop Latest Drop</div>
          <img src={arrow} alt="" />
        </div>

      </div>

      <div className="hero-right">
        {/* icons will be here */}

        <div className="icon-card bag-icon">
          <HiOutlineShoppingBag />
        </div>

        <div className="icon-card trend-icon">
          <FaArrowTrendUp />
        </div>

      </div>
    </div>
  )
}

export default Hero
