import React from 'react'
import image1 from '../images/image1.jpg'
import {RiCheckDoubleLine} from 'react-icons/ri'
const Aboutus = () => {
    return (
        <section id="aboutus">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img src={image1} style={{height:"auto",width:"100%"}}/>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h1> Chaygo's company - one of the best companies in th world</h1>
                        <p>This company produces websites, different kinds of applications , and mobile apps! Our works:</p>
                        <ul className="aboutus-ul">
                            <li> <RiCheckDoubleLine style={{color:"#2dc997",fontSize:"30px"}}/>Web projects</li>
                            <li><RiCheckDoubleLine style={{color:"#2dc997",fontSize:"30px"}}/>Applications</li>
                            <li><RiCheckDoubleLine style={{color:"#2dc997",fontSize:"30px"}}/>Mobile apps</li>
                        </ul>
                        <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Aboutus