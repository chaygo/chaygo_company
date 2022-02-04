import React , {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import {Container} from 'react-bootstrap'
import { api_sections } from './api_sections';

const Detail = () => {
    const [data,setData] = useState(null);
    const [section,setSection]=useState(null);
    const {id} =useParams();
    useEffect(()=>{
        api_sections.get(`sections/${id}`)
        .then(res=>{
            console.log(res.data.workers);
            setSection(res.data);
            setData(res.data.workers);
        })
        .catch(error=>{
            console.log(error.message);
        })
    },[id])
    return (
        <section id="team">
      <div className="container">
        <div className="section-header">
          { section && <h3 className="section-title">{section.name}</h3> }
          { section && <p className="section-description">{section.short_description}</p>}
        </div>
        <div className="row ">
         {data && data.map((d)=>(
           
               <div className="col-md-6 col-lg-4 col-sm-12" key={`team-${d.id}`}>
                   <div className="card ">
                       <div className="text-center"> <img src={d.image_url} height="100" className="rounded-circle"/> </div>
                       <div className="text-center mt-3"> 
                           <h5 className="mt-2 mb-0">{d.name}</h5> <span>{d.section}</span>
                           <div className="px-4 mt-1">
                               <p className="fonts">{d.email}</p>
                           </div>
                        </div>
                    </div>
                </div>
      
         ))}
          

          
        </div>
      </div>
    </section>
    )
}

export default Detail