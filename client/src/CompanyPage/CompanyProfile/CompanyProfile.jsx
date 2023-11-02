import { useState, useEffect } from 'react'
import CompanyNavbar from '../../Components/CompanyNavbar/CompanyNavbar'
import Profile from '../../Components/UserProfile/Profile'
import axios from 'axios'
import ProfileCompany from '../Profile/Profile'

const CompanyProfile = () => {
  const [data, setData] = useState([])
  const [delData, setDelData] = useState([])
  const [loading, setLoading] = useState(true)
  const fetching = async () => {
    try {
      const response = await axios.get('http://localhost:2000/company/me', {
        headers: {
          Authorization: localStorage.getItem('company'),
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
      <CompanyNavbar />

      <div className='user__profile'>
        <ProfileCompany key={data.data._id} data={data.data} />
      </div>
    </section>
  )
}
export default CompanyProfile
