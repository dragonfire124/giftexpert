import React, { useEffect, useState } from 'react'
import { useFetchGift } from '../hooks/useFetchGift';
import { GiftItem } from './GiftItem';
import { getGits } from './helpers/Getgifs'



export const Gifgrid = ({category}) => {
 const {images, isLoading} = useFetchGift(category);
 
/*****RETURN COMMENTS 
//El siguiente fragemnto de return tambien se puede escribir: 
images.map(({title, id})=>{
  if(title==='') return;
  return(
    <GiftItem key={id} title={title} />
    )

Tambien la siguente forma es aceptable: 
images.map(image)=>{
  if(title==='') return;
  return(
    <GiftItem key={image.id} {...image} />    // En este caso {..image} se le llama esparcir las propiedades, se desestructuran todas  las propiedades disponibles del componente y se mandan como props, en componente hijo se desestructuran las propiedades que se necesiten. 
    )


*/ 
  return (
    <>
    <h3>{category}</h3>
    { isLoading? <h2>Cargando...</h2>:null}

    <div className='card-grid'> 
    {
        images.map((image)=>{
        if(image.title==='') return;
        return(
          <GiftItem key={image.id} {...image} />
          )
        })     
    }
    </div> 
    </>
  )
}
