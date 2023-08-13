import { useEffect, useState } from "react"
import './App.css'

/* ENDPOINT */
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
  
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  const [factError, setFactError] = useState()

  //Para recuperar la frase entera al cargar la página
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => {
        if (!res.ok) throw new Error('Error fetching fact')
        return res.json()
      })
      .then(data => {
          const {fact} = data  
          setFact(fact)

          })
      .catch((err) => {
        //tanto si hay un error con al respuesta
        //como si lo hay con la petición
        
      })
  }, [])

  //Para recuperar la imagen (con la primera palabra) cada vez que tengamos una frase nueva, y cambie el fact

  useEffect(() => {
    if(!fact) return

    const firstWord = fact.split(' ')[0]
    //Si pidieran las 3 primeras palabras: const firstWord = fact.split(' ').slice(0,3).join(' ') || fact.split(' ', 3)

    //Se carga la imagen de un gato en función de la primera palabra obtenida de la primera API
    fetch(`https://cataas.com/cat/cute/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const {url} = response
        setImageUrl(url)
      })

  },[fact])

  return (
    <main>
      <h1>App de gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} 
        alt={`Image extracted using the first three words for ${fact}`}/>}
      </section>
    </main>
  )
}
