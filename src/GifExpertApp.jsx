import { useState } from "react"
import { AddCategory, Gifgrid } from "./components"


export const  GifExpertApp =()=> {
    const [categories, setCategories]= useState(['One punch'])    //  Es el arreglo que se renderiza en el html, se guarada en memoria, porque se añadiran elementos al arreglo. 
    
    const onAddCategory=(newCategory)=>{               // On addCategory, se establece que recibira un parametro. Est funcion agrega una nueva categoria. 
        if(categories.includes(newCategory)){return;}  // Si el la categoria que se escribe en input ya existe,  ya no se agrega al arreglo. 
        setCategories([...categories, newCategory])    // 
    
        // En addcategory se manda a llamar la funcion on NewCategory, se le pasa de parametro un event. 
        // En addCategory a la funcion onNewCategory, se desestructura y se le manda como parametro el texto escrito en el output.
    }

    /* 
    **return comments**
     <AddCategory  onNewCategory={event =>onAddCategory(event)}/>    // Manda al componente property onNewCategory, que es una funcion, que contiene la funcion "onAddCategory" que añade nuevas categorias.
    */

    return (
        <>
        <h1>GifExpertApp</h1>
        
        <AddCategory  onNewCategory={event =>onAddCategory(event)}/>    
        
        
            {
                categories.map((category)=>(                        // Por cada categoria se renderiza componente que manda en un <h3>la categoria 
                   <Gifgrid  key={category}  category ={category}/> // Se manda por cada elemento del arreglo "categories" como properties. 
                ))
            }
        

        </>
      
    )
  
}
