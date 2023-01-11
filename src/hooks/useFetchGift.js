import React, { useEffect, useState } from 'react'
import { getGits } from '../components/helpers/Getgifs';

export const useFetchGift = (category) => {

    const [images,setImages]= useState([]);  
    const [isLoading, setIsLoading] = useState(true);
    /*
    const getImages =async()=>{
      const newImages = await  getGits(category);
      setImages(newImages)
    }
    */
    useEffect( ()=>{
      getGits(category)                         //No puede definirse el callback como asyncrono En el  "useEffect"
      .then(newImages =>{
        setImages(newImages)
        setIsLoading(false)
      })   // Tambien existe la posibilidad que se defina a parte una funcion asincrona y se mande a llamar dentro del "useEffect"
      
    },[])
 

  return {
    images: images,
    isLoading: isLoading
}
    
  
}
