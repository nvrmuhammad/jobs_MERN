import { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import VacancyModel from '../../Components/Vacancy/Vacancy'
import './Vacancy.css'
import axios from 'axios'

const Vacancy = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetching = async () => {
    try {
      const response = await axios.get('http://localhost:2000/vacancy', {
        headers: {
          Authorization: localStorage.getItem('user'),
        },
      })

      setData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  

  useEffect(() => {
    fetching()
  }, [])


  if (loading) {
    return <h1>Loading</h1>
  }

  return (
    <section id='Vacancy'>
      <Navbar />

      <div className='vacancies__container'>
        {data.data.map((v) => (
          <VacancyModel
            key={v._id}
            data={v}
          />
        ))}
        {/* {data.data.map((v) => (
          <VacancyModel key={v._id} data={v} />
        ))}
        {data.data.map((v) => (
          <VacancyModel key={v._id} data={v} />
        ))}
        {data.data.map((v) => (
          <VacancyModel key={v._id} data={v} />
        ))} */}
        {/* <VacancyModel />
        <VacancyModel />
        <VacancyModel />
        <VacancyModel /> */}
      </div>
    </section>
  )
}
export default Vacancy
