import { useEffect, useState } from "react"
import './App.css'

/* ENDPOINT */
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
  
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
          const {fact} = data  
          setFact(fact)
          const firstWord = fact.split(' ')[0]
          //Si pidieran las 3 primeras palabras: const firstWord = fact.split(' ').slice(0,3).join(' ') || fact.split(' ', 3)

          //Se carga la imagen de un gato en función de la primera palabra obtenida de la primera API
          fetch(`https://cataas.com/cat/cute/says/${firstWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
              const {url} = response
              setImageUrl(url)
            })
          })
  }, [])

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
