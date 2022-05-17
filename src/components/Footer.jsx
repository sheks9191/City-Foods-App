import { Link } from "react-router-dom"
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {BsPhone} from 'react-icons/bs'
import {FaEnvelope} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
        <div className="row-one">
        <div className="column-one">
            <Link to='/' style={{textDecoration: 'none'}}>
                    <h1 className="nav-logo">CITY <span>FOODS</span></h1>
            </Link>
            <p>City Food provides online food ordering and delivery solutions to Households, Parties, Events, 
                Conferences, Seminars etc. City Food is owned and operated by Foody Ltd </p>

                <ul className="social-media">
                <Link to='/' style={{textDecoration: 'none'}}>
                   <li><AiFillFacebook fill="#ccc" size={30}/></li> 
                </Link>
                <Link to='/' style={{textDecoration: 'none'}}>
                   <li><AiFillInstagram fill="#ccc" size={30}/></li> 
                </Link>
                <Link to='/' style={{textDecoration: 'none'}}>
                   <li><AiFillTwitterCircle fill="#ccc" size={30}/></li> 
                </Link>

                </ul>

        </div>

        <div className="column-two">
            <h4>Quick Links</h4>
            <ul>
                <Link to='/menu' style={{textDecoration: 'none'}}>
                   <li>Menu</li> 
                </Link>
                <Link to='/about' style={{textDecoration: 'none'}}>
                   <li>About</li> 
                </Link>
                <Link to='/' style={{textDecoration: 'none'}}>
                   <li>Faq</li> 
                </Link>
                <Link to='/' style={{textDecoration: 'none'}}>
                   <li>Blogs</li> 
                </Link>
                <Link to='/contact' style={{textDecoration: 'none'}}>
                   <li> Contact</li>
                </Link>

            </ul>      
        </div>

        <div className="column-three">
            <h4>Information</h4>
            <ul>
            <Link to='/' style={{textDecoration: 'none'}}>
                   <li>Term Of Service</li> 
             </Link>
             <Link to='/' style={{textDecoration: 'none'}}>
                   <li>Privacy Policy</li> 
             </Link>
             </ul>
        </div>
        </div>

        <div className="row-two">

            <div className="box-one">
               <GoLocation fill="#b94517" size={25}/>
                <div className="location">
                   <h4>Location</h4>
                   <p>City Foods House, No 45<br/>Sekooni Street VI Lagos</p>
                </div>
            </div>

            <div className="box-two">
               <FaEnvelope fill="#b94517" size={25}/>
                <div className="enquiries">
                    <h4>Enquiries</h4>
                    <Link to='/contact' style={{textDecoration: 'none'}}>
                      <p>Contact Us</p>
                    </Link>
                </div>
            </div>

            <div className="box-three">
               <BsPhone fill="#b94517" size={25}/>
                <div className="hotlines">
                   <h4>Hotlines</h4>
                   <p>+2349038951193</p>
                   <p>+2348119460199</p>
                </div>
            </div>
        </div>
        <small style={{color:'#ccc'}}>Copyright &copy; 2022 CityFood.com. All Rights Reserved</small><br/>
        <small style={{color:'#ccc'}}>Made by Sekooni Olumide - React.js</small>
    </footer>
  )
}

export default Footer