import React , {useEffect, useState} from 'react'
import {Card } from 'react-bootstrap'

import { useParams,Link } from 'react-router-dom/cjs/react-router-dom.min'
import {AiFillHeart,AiFillEye,AiOutlineHeart} from 'react-icons/ai'
import {api_sections} from '../api_sections'

const Works = () => {
  const [data,setData] = useState(null);
  const [section,setSection]=useState(null);
  const {id} =useParams();
  useEffect(()=>{
      api_sections.get(`sections/${id}`)
      .then(res=>{
          console.log(res.data.works);
          setSection(res.data);
          setData(res.data.works);
      })
      .catch(error=>{
          console.log(error.message);
      })
  },[id])
    return (
       
    <section id="team">
      <div className="container">
        <div className="section-header">
         {section && <h3 className="section-title">Works of {section.name}</h3>}
         {section && <p className="section-description">{section.short_description}</p>}
        </div>
        <div className="row">
        
         {data && data.map((d)=>(
           <Link to={`/works/${d.id}`}>
              <Card key={`works-${d.id}`} className="col-md-4 col-sm-6 col-lg-3">
              <Card.Img variant="top" src={d.image_url} />
              <Card.Body>
                <Card.Title>{d.name}</Card.Title>
                <Card.Text>
                  {d.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <AiFillHeart className="float-left"/>
              <AiOutlineHeart/>
              <AiFillEye className="float-right"/>
              </Card.Footer>
            </Card>
          </Link>
         ))}
          

          
        </div>
      </div>
    </section>


    )
}

export default Works