import links from "../data/links"
import { Link} from 'react-router-dom'
import CartButton from "./CartButton"

const Navbar = () => {
  return (
      <>
         
        <nav className="navbar">
            <div className="nav-center">
                <Link to='/' style={{textDecoration: 'none'}}>
                    <h1 className="nav-logo">CITY <span>FOODS</span></h1>
                </Link>
                
                 <ul className="nav-links">
                     {links.map(link => {
                         const {id, url, text} = link;
                         return (
                             
                         <Link to={url} key={id} style={{textDecoration: 'none'}}><li >{text} </li></Link>
                            
                         )
                     })}
                 </ul>

                 <CartButton/>
                
            </div>
         


        </nav>
   
      </>
   
  )
}

export default Navbar