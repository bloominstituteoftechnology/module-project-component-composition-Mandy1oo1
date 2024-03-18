import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'

const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`

function App() {
  const [apod, setApod] = useState()

  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
      .then(res => {
        console.log(res.data)
        setApod(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
    fetchPhoto()
   setApod(
      {
          "date": "2024-03-18",
          "explanation": "A bright comet will be visible during next month's total solar eclipse.  This very unusual coincidence occurs because Comet 12P/Pons-Brooks's return to the inner Solar System places it by chance only 25 degrees away from the Sun during Earth's April 8 total solar eclipse.  Currently the comet is just on the edge of visibility to the unaided eye, best visible with binoculars in the early evening sky toward the constellation of the Fish (Pisces). Comet Pons-Brooks, though, is putting on quite a sh...",
          "hdurl": "https://apod.nasa.gov/apod/image/2403/CometPonsBrook_Vallestad_2564.jpg",
          "media_type": "image",
          "service_version": "v1",
          "title": "Comet Pons-Brooks' Swirling Coma",
          "url": "https://apod.nasa.gov/apod/image/2403/CometPonsBrook_Vallestad_960.jpg"
        },
  )
  }, [])

  if (!apod) return 'Fetching Photo of the Day...'
  return (
    <section>
      <Card
      title={apod.title}
      text={apod.explanation}
      imageUrl={apod.url}
      date={apod.date}
      />
     
    </section>
  )
}

export default App
