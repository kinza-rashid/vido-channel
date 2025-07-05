

import  NavBar from  '../../components/NavBar/NavBar'
import Hero from '../../components/Hero/Hero'
import TitleCard from '../../components/TitleCard/TitleCard'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='Home'>
      <NavBar/>
      <Hero/>
      <TitleCard/>
  
     
      <TitleCard title={"Blockbuster Movies"} category={"A"} />
      <TitleCard title={"Only on Netflix"} />
      <TitleCard title={"Upcoming"} />
      <TitleCard title={"Top Picks For You"} />
     

      <Footer/>
    </div>
          
        )
}

export default Home