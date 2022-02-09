import React , {useState} from 'react'
import { FaChevronDown ,FaChevronUp} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SectionList = ({section}) => {
    const [dropbtn,setDropBtn]=useState(false);

    return (
        <li className="menu-has-children" > { dropbtn ? <FaChevronUp style= {{color:"#2dc997"}}className="new-i" onClick={()=>setDropBtn(!dropbtn)} /> : <FaChevronDown className="new-i" onClick={()=>setDropBtn(!dropbtn)} /> }<Link to="#" className="sf-with-ul" >{section.name}</Link>
                <ul className={` ${dropbtn ? "" : "d-none" } `}>
                  <li><Link to={`/sections/works/${section.id}`} >Works of section</Link></li>
                  <li><Link to={`/sections/workers/${section.id}`}>Workers of section</Link></li>
                  
                </ul>
        </li>
    )
}
export default SectionList