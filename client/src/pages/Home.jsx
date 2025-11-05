

import Banner from '../components/Home/Banner'
import Contact from '../components/Home/Contact'
import Featured from '../components/Home/Featured'
import Footer from '../components/Home/Footer'
import HeroSection from '../components/Home/HeroSection'
import Testimonial from '../components/Home/Testimonal/Testimonal'

const Home = () => {
  return (
    <div>
        <Banner id="home"/>
        <HeroSection id="home"/>
        <Featured id="features"/>
        <Testimonial id="testimonials"/>
        <Contact id="contact"/>
        <Footer />
    </div>
  )
}

export default Home
