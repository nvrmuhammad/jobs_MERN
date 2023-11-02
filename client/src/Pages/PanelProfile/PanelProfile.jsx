import AdminLayout from '../../Layouts/Admin/AdminLayout'
import AdminPanelAdmins from '../AdminPanelAdmins/AdminPanelAdmins'
import axios from 'axios'
import { useState, useEffect } from 'react'

import './PanelProfile.css'
import AdminPanelProfile from '../AdminPanelProfile/AdminPanelAdmins'

const PanelProfile = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetching = async () => {
    try {
      const response = await axios.get('http://localhost:2000/admin/me', {
        headers: {
          Authorization: localStorage.getItem('admin'),
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
    <section id='Admin__panel'>
      <div className='panel'>
        <AdminLayout />
      </div>

      <div className='wrapper_adminPanel'>
        <div className='adminPanel__nav'>
          <p></p>
          <p>Profile</p>
        </div>
        <AdminPanelProfile key={data.data._id} data={data.data} />
      </div>
    </section>
  )
}
export default PanelProfile
