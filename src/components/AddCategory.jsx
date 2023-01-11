import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {      // Funcion que renderiza input, recibe un texto de input.
 
    const [inputValue, setinputValue ]= useState('');  // Crea un espacio en memoria para el input 
  
    const onInputChange =(event)=>{                    // Funcion que se manda a llamar al escribir texto en input        
    setinputValue(event.target.value)
    }

    const onSubmit =(event)=>{                         // Funcion que guarda texto en input en arreglo de "categories"
      event.preventDefault();
      if(inputValue.trim().length<=0){return};         // Elimina espacios en input, y si es mayor a un caracter. PAra no escribir categorias vacias en el arreglo. 
      onNewCategory(inputValue.trim())                 // 
      //setCategories([...categories, inputValue])
      setinputValue('');
    }
  
  /*RETURN
  Formulario con input 
  */

  return (
   <form onSubmit={(event)=> onSubmit(event) }>       
     <input
    type="text"
    placeholder ="Buscar gifts"
    value ={inputValue}
    onChange ={(event)=>onInputChange(event)}
    />
   </form>
  )
}
