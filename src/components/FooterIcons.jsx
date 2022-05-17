
import { Link } from "react-router-dom"
import { AiFillHome, AiOutlineOrderedList } from 'react-icons/ai'
import {FaEnvelope} from 'react-icons/fa'

const FooterIcons = () => {
  return (
    <>
         
        <div className="footer-icons">
            <div className="footer-center">
                <Link to='/' style={{textDecoration: 'none'}} className='link'>
                    <AiFillHome className="footer-icon"/>
                    <h4>Home</h4>
                </Link>

                 <Link to='/menu' style={{textDecoration: 'none'}} className='link'>
                    <AiOutlineOrderedList className="footer-icon"/>
                    <h4>Menu</h4>
                </Link> 

                <Link to='/contact' style={{textDecoration: 'none'}} className='link'>
                    <FaEnvelope className="footer-icon"/>
                    <h4>Contact</h4>
                </Link>  
            </div>
        </div>
   
      </>
   
  )
}

export default FooterIcons