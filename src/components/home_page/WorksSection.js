import React, {useEffect,useState,useContext} from 'react'
import image1 from '../../images/image1.jpg'
import { ServiceContext } from '../../contexts/ServiceContext'
const WorksSection = (props) => {

    const {data,works,setData,setWorks} = useContext(ServiceContext);
    const [filtered_array,setFiltered_array]=useState(works);
    const [active,setActive] = useState(-1);
    const filterWorks = (name,index) =>{
     console.log(filtered_array)
     
        if (name)
        {
           setFiltered_array(works.filter(work => work.section === name))
           setActive(index);
        }
        else{
          setFiltered_array(works);
          setActive(-1);
        }
        console.log(name);
        
       
    }
    
    return (
        <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-header">
            <h3 className="section-title">Portfolio</h3>
            <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
          </div>
  
          <div className="row" >
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li  className={ active === -1 ? "filter-active" : undefined } key={-1} onClick={()=>filterWorks(null,-1)}>All</li>
                { data &&
                data.map((d,index)=>(
                    <li className={ active === index ? "filter-active" : undefined } key={d.id}  onClick={()=>filterWorks(d.name,index)}>{d.name}</li>
                ))
                }
                
               
              </ul>
            </div>
          </div>
  
          <div className="row portfolio-container" >
            { filtered_array &&
            filtered_array.map((w)=>(
            <div className="col-lg-4 col-md-6 portfolio-item " key={`workdetail-${w.id}`}>
              <img src={w.image_url} className="img-fluid" alt=""/>
            </div>
            ))}
            { !filtered_array && works &&
            works.map((w)=>(
            <div className="col-lg-4 col-md-6 portfolio-item " key={`workdetail-${w.id}`}>
              <img src={w.image_url} className="img-fluid" alt=""/>
            </div>
            ))}
            
  
           
  
          </div>  
        </div>
      </section>
  
    )

}

export default WorksSection