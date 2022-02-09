import React , {useState , useEffect , useContext} from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'; 
import {BsEmojiHeartEyes,BsFillEyeFill} from 'react-icons/bs'
import { api_sections } from '../api_sections';
import Work_carousel from './work_carousel';
const Works_detail = () => {
    const [work,setWork]=useState();
    const {id} =useParams();
    useEffect(()=>{
        api_sections.get(`works/${id}`)
        .then((res)=>{
            setWork(res.data);
            console.log(res.data)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    },[id])


    return (
        <section id="work_detail">
            <div className="container" >
                <div className="row">
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div className="work-image">
                        {work &&  <img src={work.image_url} alt="" /> }
                        </div>
                    
                            <ul className="achievements">
                            {work && <li><BsEmojiHeartEyes/> {work.likes} likes</li>}
                                {work && <li><BsFillEyeFill/> {work.views} views</li> }
                            </ul>
                        
                    </div>
                    <div className='col-lg-8 col-sm-12 col-md-6 work-detail'>
                    {work && <h1>{work.name}</h1>}
                    {work &&  <p>{work.description}</p>}

                    </div>

                </div>
                <div className='row'>
                    <Work_carousel work={work}/>
                </div>
            </div>
        </section>

    )
}

export default Works_detail