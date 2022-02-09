import React , { createContext, useState , useEffect } from 'react'
import {api_sections} from '../components/api_sections'
export const ServiceContext = createContext();

const ServiceProvider = ({ children }) => {
  const [data,setData] = useState(null);
  const [works,setWorks] = useState(null);
  useEffect(() => {
    api_sections.get('sections')
    .then(res=>{
        console.log(res);
        setData(res.data);
    })
    .catch(error=>{
        console.log(error.message);
    })
    api_sections.get('works')
    .then(res=>{
        console.log(res);
        setWorks(res.data);
    })
    .catch(error=>{
        console.log(error.message);
    })
  }, []);

  return (
    <ServiceContext.Provider
      value={{
        data,
        works,
        setData,
        setWorks,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
}
export default ServiceProvider