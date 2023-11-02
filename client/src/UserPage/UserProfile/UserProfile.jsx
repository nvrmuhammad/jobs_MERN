import Navbar from '../../Components/Navbar/Navbar'
import './UserProfile.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Profile from '../../Components/UserProfile/Profile'

const UserProfile = () => {
  const [data, setData] = useState([])
  const [delData, setDelData] = useState([])
  const [loading, setLoading] = useState(true)
  const fetching = async () => {
    try {
      const response = await axios.get('http://localhost:2000/user/me', {
        headers: {
          Authorization: localStorage.getItem('user'),
        },
      })

      const userData = response.data

      setData(userData)
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
    <section id='User__profile'>
      <Navbar />

      <div className='user__profile'>
        <Profile key={data.data._id} data={data.data} />
      </div>
    </section>
  )
}
export default UserProfile
