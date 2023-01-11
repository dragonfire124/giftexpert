// ****** Este componente trae imagenes del API, retorna objetos con  la info obtenida. 

export const getGits =async(category)=>{ 
    const url  = `https://api.giphy.com/v1/gifs/search?api_key=52ezN20AitH1cO6u01Mqaa1zHcYz6N5P&q=${category}&limit=20`
    const resp =await fetch(url)
    const {data}= await resp.json();
    
    const gifts = data.map(img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
  
    console.log(gifts)
    return gifts;
  }
  