import { heroDataOne } from '../data/HeroData';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeroSlider = () => {

  const [foods, setFoods ] = useState(heroDataOne);
  const [index, setIndex]  = useState (0)

  useEffect(() => {
    const lastIndex = foods.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, foods]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
        <div className="hero-center">
            {foods.map((food, foodIndex) => {
            const {id, img, info, text} = food

          let position = 'nextSlide';
          if (foodIndex === index) {
            position = 'activeSlide';
          }
          if (
            foodIndex === index - 1 ||
            (index === 0 && foodIndex === food.length - 1)
          ) {
            position = 'lastSlide';
          }

            return (
                <div className={`hero-slider ${position}`} key={id}>
                    <img src={img} alt={info} className='hero-img'/>
                    <p>{info}</p>
                    <Link to='/menu' style={{textDecoration: 'none'}} className='btn'>{text}</Link>   
                </div>
            )
        })}

        <button className="prev-btn" onClick={() => setIndex(index + 1)}>
          <FiChevronLeft />
        </button>
        <button className="next-btn" onClick={() => setIndex(index - 1)}>
          <FiChevronRight />
        </button>
    

        </div>
        
  )
}

export default HeroSlider