import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'
import Categories from '../components/Category/Category'
import Hero from '../components/Hero/Hero'
import Events from '../components/Promotion/Promotion'
import Top100 from '../components/Top100/Top100'
import Recommend from '../components/Recommend/Recommend'

const HomePage = () => {
  
  return (
    <div>
        <Header activeHeading={1}/>
        <Hero />
        <Categories />
        <Top100 />
        <Events />
        <Recommend/>
        <Footer/>
    </div>
  )
}

export default HomePage