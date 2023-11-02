import AdminLayout from '../../Layouts/Admin/AdminLayout'
import AdminPanelAdmins from '../AdminPanelAdmins/AdminPanelAdmins'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import './AdminPanel.css'

const AdminPanel = () => {
  const [data, setData] = useState([])
  const [delData, setDelData] = useState([])
  const [loading, setLoading] = useState(true)
  const fetching = async () => {
    try {
      const response = await axios.get('http://localhost:2000/admins', {
        headers: {
          Authorization: localStorage.getItem('admin'),
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

  const notifyError = (msg) => {
    toast.error(msg, {
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

  const handleDeleteAdmin = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:2000/admins/${id}`,
        {
          headers: {
            Authorization: localStorage.getItem('admin'),
          },
        }
      )
      const adminData = response.data
      setDelData(adminData)
      fetching()
      if (adminData.data.error) {
        notifyError(response.data.data.error)
      }
      if (!adminData.data.error) {
        notifySuccess('Successfully deleted')
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(delData)

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
          <p>Admins</p>
          <p>Admin</p>
        </div>
        {data.data.map((u) => (
          <AdminPanelAdmins
            id={u._id}
            key={u._id}
            handleDeleteAdmin={(id) => handleDeleteAdmin(id)}
            data={u}
          />
        ))}
      </div>
    </section>
  )
}
export default AdminPanel
