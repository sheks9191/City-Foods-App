import HeroSlider from "../components/HeroSlider"
import HeroRight from "../components/HeroRight"
import NewsLetterForm from "../components/NewsLetterForm"
import Footer from "../components/Footer"


const Home = () => {
  return (
    <main className='hero'>
      <div className="hero-container">
          <div className="hero-left">
        <h1 className="hero-title">
            The best food delivery within your reach
        </h1>
        <p><span>City</span>  is the home to Local dishes, Foreign dishes, Chinese dishes, African dishes and a lot 
          of delicious meals you deserve. We are the kitchen you can trust 24/7 to nurish your appetite.
        </p>
      </div>
      <HeroSlider/>
      </div>
      <HeroRight/>
      <NewsLetterForm/>
      <Footer/>
    </main>
  )
}

export default Home