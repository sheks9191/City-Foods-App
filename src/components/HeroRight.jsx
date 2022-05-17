
import  { heroDataTwo } from "../data/HeroData"
const HeroRight = () => {
  return (
    <div className="hero-right">
        {heroDataTwo.map(data=> {
            const {id, img, text} = data
          return (
        <div className="right" key={id}>
          <img src={img} alt={text}/>
          <h4>{text}</h4>
        </div>)
        })}
        
        
    </div>
  )
}

export default HeroRight
