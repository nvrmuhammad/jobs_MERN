import AdminLayout from '../../Layouts/Admin/AdminLayout'
import AdminPanelCompany from '../AdminPanelCompany/AdminPanelCompany'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './PanelCompanies.css'
import { toast } from 'react-toastify'

const PanelCompanies = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  const fetching = async () => {
    try {
      const response = await axios.get('http://localhost:2000/company', {
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

  const handleRemoveCompany = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:2000/company/${id}`,
        {
          headers: {
            Authorization: localStorage.getItem('admin'),
          },
        }
      )
      const userData = response.data

      setData(userData)
      setLoading(false)

      if (userData.data.error) {
        notifyError(response.data.data.error)
      }

      if (!userData.data.error) {
        notifySuccess('Successfully removed')
      }
    } catch (error) {
      console.log(error)
    }
    setLoading(true)
    fetching()
  }

  const handleAllowCompany = async (id) => {
    try {
      const response = await axios.patch(
        `http://localhost:2000/companyAllow/${id}`,
        {},
        {
          headers: {
            Authorization: localStorage.getItem('admin'),
          },
        }
      )

      const userData = response.data

      setLoading(false)

      if (userData.data.error) {
        notifyError(response.data.data.error)
      }

      if (!userData.data.error) {
        notifySuccess('Successfully allowed')
      }
    } catch (error) {
      console.log(error)
    }
    setLoading(true)
    fetching()
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
          <p>Companies</p>
          <p>Admin</p>
        </div>
        {data.data.map((u) => (
          <AdminPanelCompany
            handleRemoveCompany={(id) => handleRemoveCompany(id)}
            handleAllowCompany={(id) => handleAllowCompany(id)}
            key={u._id}
            data={u}
          />
        ))}
      </div>
    </section>
  )
}
export default PanelCompanies
