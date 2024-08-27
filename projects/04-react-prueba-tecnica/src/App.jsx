import { useEffect, useState } from "react"

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App (){
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data =>{
        const { fact } = data
        setFact(fact)
      })
  }, [])  

  useEffect(() => {
    if (!fact) return
    
    const firstWord = fact.split(' ')[0]
        
    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red`)
      .then(response => setImageUrl(response.url)) 
  }
  , [fact]) 

  return (
    <main style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxWidth: 
      '600px', margin: '0 auto', fontFamily: 'system-ui'
     }}>
      <h1>Prueba Tecnica</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words 
        for ${fact}`} />}
    </main>
  )
}
