import React from 'react'
import {  Carousel } from 'react-bootstrap'
import surat from "../../images/images2.jpg"
const Slider =() => {
    return (

     
        <Carousel>
            <Carousel.Item style={{backgroundColor:"#000",}}>
            <img
                className="d-block w-100"
                style={{opacity:'0.4'}}
                src={surat}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  style={{backgroundColor:"#000",}}>
            <img
                className="d-block w-100"
                style={{opacity:'0.4'}}
                src={surat}
                alt="Second slide"
            />
        
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{backgroundColor:'#000',}}>
            <img
                className="d-block w-100"
                style={{opacity:'0.4'}}
                src={surat}
                alt="Third slide"
            />
        
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        

    )
}

export default Slider