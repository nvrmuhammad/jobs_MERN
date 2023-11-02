import { useEffect, useState } from 'react'
import CompanyNavbar from '../../Components/CompanyNavbar/CompanyNavbar'
import './AddVacancy.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const AddVacancy = () => {
  const [name, setName] = useState()
  const [requirement, setRequirement] = useState()
  const [salary, setSalary] = useState()
  const [location, setLocation] = useState()
  const [experience, setExperience] = useState()

  const [data, setData] = useState([])
  const [delData, setDelData] = useState([])
  const [loading, setLoading] = useState(true)
  const fetching = async () => {
    try {
      const response = await axios.get('http://localhost:2000/experience', {
        headers: {
          Authorization: localStorage.getItem('company'),
        },
      })

      const userData = response.data
      setExperience(userData.data[0]._id)

      setData(userData)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  const createVacancy = async () => {
    try {
      const response = await axios.post(
        'http://localhost:2000/vacancy',
        {
          name,
          requirements: requirement,
          salary,
          location,
          experience_id: experience,
        },
        {
          headers: {
            Authorization: localStorage.getItem('company'),
          },
        }
      )

      const userData = response.data

      window.location.assign('/company/profile')
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const validateError = (msg) => {
    toast.error(msg, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })
  }

  const notifySuccess = (msg) => {
    toast.success(msg, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })
  }

  const postVacancy = (e) => {
    if (!name || !requirement || !salary || !location || !experience) {
      return validateError('Please enter fully')
    }
    setLoading(true)
    createVacancy()
  }

  useEffect(() => {
    fetching()
  }, [])

  if (loading) {
    return <h1>Loading</h1>
  }

  return (
    <section id='AddVacancy'>
      <CompanyNavbar />

      <div className='addition__vacancies'>
        <div className='modul__add__vacancy'>
          <input
            className='add__vacancy__detail'
            type='text'
            placeholder='vacancy name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className='add__vacancy__detail'
            type='text'
            value={requirement}
            placeholder='rquirements'
            onChange={(e) => setRequirement(e.target.value)}
          />
          <input
            className='add__vacancy__detail'
            type='number'
            value={salary}
            placeholder='salary'
            onChange={(e) => setSalary(e.target.value)}
          />
          <input
            className='add__vacancy__detail'
            type='text'
            value={location}
            placeholder='location'
            onChange={(e) => setLocation(e.target.value)}
          />
          <select
            className='add__vacancy__detail'
            onChange={(e) => setExperience(e.target.value)}
          >
            {data.data.map((e) => (
              <option key={e._id} value={e._id}>
                {e.name}
              </option>
            ))}
          </select>
          <button onClick={postVacancy} id='add__vacancy__btn'>
            save
          </button>
        </div>
      </div>
    </section>
  )
}
export default AddVacancy
