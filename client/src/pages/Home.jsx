
import Banner from '../components/Home/Banner'
import Contact from '../components/Home/Contact'
import Featured from '../components/Home/Featured'
import Footer from '../components/Home/Footer'
import HeroSection from '../components/Home/HeroSection'
import Testimonial from '../components/Home/Testimonal/Testimonal'

const Home = () => {
  return (
    <div>
        <Banner/>
        <HeroSection/>
        <Featured/>
        <Testimonial/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home