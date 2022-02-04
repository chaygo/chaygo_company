import React from 'react'
import Slider from './Slider'
import Services from './Services'
import Sections from './Works'
import {ServiceContext} from '../contexts/ServiceContext'
import ServiceProvider from '../contexts/ServiceContext'
const Body = () =>  {
    return (
        <div>
            <Slider/>
            <ServiceProvider>
            <Services/>
            </ServiceProvider>
             
        </div>
        
       
       
    
    )
}

export default Body