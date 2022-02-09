import React , {useContext}from 'react';
import {GrPersonalComputer} from 'react-icons/gr';
import {ServiceContext} from '../../contexts/ServiceContext'

import { api_sections } from '../api_sections';
const Services = (props)=>{
  
    const {data} = useContext(ServiceContext)
   

    return (
        <section id="services">
      <div className="container" >
        <div className="section-header">
          <h3 className="section-title">Services</h3>
          <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>
        <div className="row">
        {data && data.map((d)=>(

       
          <div className="col-lg-4 col-md-6" key={`sections-${d.id}`}>
            <div className="box">
              <div className="icon"><a href=""><GrPersonalComputer/></a></div>
              <h4 className="title"><a href="">{d.name}</a></h4>
              <p className="description">{d.short_description}</p>
            </div>
          </div>
         ))}
        </div>  
      </div>
    </section>
    )
}

export default Services