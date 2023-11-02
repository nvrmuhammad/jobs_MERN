import Navbar from '../../Components/Navbar/Navbar'
import './Request.css'
import { FcAddressBook } from 'react-icons/fc'
import { FcFile } from 'react-icons/fc'
import { FcDepartment } from 'react-icons/fc'
import { FcFlashOn } from 'react-icons/fc'
import { FcCalendar } from 'react-icons/fc'
import RequestComponent from '../../Components/Request/Request'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Request = () => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const update = async () => {
    try {
      const response = await axios.get('http://localhost:2000/request', {
        headers: {
          Authorization: localStorage.getItem('user'),
        },
      })

      setLoading(false)
      setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    update()
  }, [])

  if (loading) {
    return <h1>Loading</h1>
  }

  return (
    <section id='Request'>
      <Navbar />

      <div className='requests'>
        {data.data.map((r) => (
          <RequestComponent key={r._id} data={r} />
        ))}
      </div>
    </section>
  )
}
export default Request
