import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'

const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`

export default function App() {
  const [data, setData] = useState()

  useEffect(() => {
    function fetchAPOD() {
      axios.get(URL)
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
    fetchAPOD()
  }, [])

  if (!data) return <p>Fetching data...</p>
  return (
    <section>
      <Card
      title={data.title}
      text={data.explanation}
      image={data.url}
      author={data.service_version}
      date={data.date}
      />
     
    </section>
  )
}
