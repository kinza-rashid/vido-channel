
import './Hero.css'
import  HeroImage from  '../../assets/wednesday.png'
const Hero = () => {
  return (
    <div className="hero">
        <img src={HeroImage} alt="" className='bannerImage' />
    
        <div className="heroButtons">
          <button className='btn0'>
            Play
          </button>

          <button className='btn1'>
            More info
          </button>

        </div>
      </div>
  )
}

export default Hero

