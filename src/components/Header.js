import React, { useContext } from 'react'
import { Link , useLocation } from 'react-router-dom'
import { useEffect , useState } from 'react'
import {FaAngleDown,FaBars,FaTimes,FaChevronDown,FaChevronUp} from 'react-icons/fa';
import SectionList from './SectionList'
import { ServiceContext } from '../contexts/ServiceContext';

const Header = () => {
    const {data:sections} = useContext(ServiceContext)
    const location=useLocation();
    const [sectionactive,setSectionActive]=useState(false);
    const [headerbutton,setheaderbutton]=useState(true);
    const [dropbtn,setDropBtn]=useState(false);

        useEffect(() => {
           
            if (location.pathname.indexOf('/sections/') !== -1)
            {
              setSectionActive(true);
              console.log(sectionactive);
            }
            else {
              setSectionActive(false);
              console.log(sectionactive);
            }

    } ,[sectionactive,location] );
    const HeaderButton = () => {
      setheaderbutton(!headerbutton);
      if (headerbutton)
      {
        document.body.classList.add("mobile-nav-active");
      }
      else{
        document.body.classList.remove("mobile-nav-active");
      }
  }
   
    return (
        
       
  <header  className={`header ${ location.pathname === '/' ? "header-transparent" : "" } fixed-top `}>
    <div className="container">

      <div className="logo pull-left">
        
       
       <h1><Link to="/" style={{textDecoration:"none",}}>Chaygo</Link></h1>
      </div>

      <nav className="nav-menu-container  d-sm-none d-lg-block d-md-block">
        <ul className="nav-menu">
          <li className={` ${ location.pathname === '/' ? "menu-active" : "" }`}><Link to="/">Home</Link></li>
          <li className={` ${ location.pathname === '/aboutus' ? "menu-active" : "" }`}><Link to="/aboutus">About Us</Link></li>
          <li className= {` ${ location.pathname === '/news' ? "menu-active" : "" }`}><Link to="/news">News</Link></li>
          
          <li className={` ${ sectionactive ? "menu-active" : "" } menu-has-children`}><Link to="#" >Sections <FaAngleDown/></Link>
            <ul>
            
            {sections && sections.map((section)=>(
                <li key={ `sections-${section.id}` }  className="menu-has-children">
                  <Link to="#" >{section.name}</Link>
                  <ul>
                    <li><Link to={`/sections/workers/${section.id}`} >Workers of section</Link></li>
                    <li><Link to={`/sections/works/${section.id}`}  >Works of section</Link></li>
                  </ul>
                  </li> 
            ))
              }
             
              
            </ul>
          </li>
          <li className={` ${ location.pathname === '/contact' ? "menu-active" : "" }`}><Link to="/contact" >Contact Us</Link></li>
        </ul>
      </nav>
    </div>
    <button type="button" id="mobile-nav-toggle" className="d-md-none d-lg-none d-sm-block" onClick={HeaderButton}>
       { headerbutton ? (<FaBars style={{color:"white"}}/>) : (<FaTimes style={{color:"white"}}/>) }
      </button>
    <nav id="mobile-nav" className="d-lg-none d-md-block d-sm-block">
        <ul className="" style={{touchAction: "pan-y"}} id="">
          <li className=""><Link to="/">Home</Link></li>
          <li className=""><Link to="/about">About Us</Link></li>
         
          <li className="menu-has-children">{ dropbtn ? <FaChevronUp style= {{color:"#2dc997"}}className="new-i" onClick={()=>setDropBtn(!dropbtn)} /> : <FaChevronDown className="new-i" onClick={()=>setDropBtn(!dropbtn)} /> }
            <ul >
              <Link to="" className="sf-with-ul">Sections</Link>
              <ul className={` ${dropbtn ? "" : "d-none" } `}>
              {sections &&  sections.map((d)=>(
               
                <SectionList section={d} key={`mobile-section-${d.id}`} />
                
              ))
              }
              </ul>
              
              
            </ul>
          </li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
      <div id="mobile-body-overly" className={` ${headerbutton ? "d-none" : "d-block"}  d-lg-none d-md-none`} ></div>
  </header>

 
   

    )
}
export default Header