import AdminLayout from '../../Layouts/Admin/AdminLayout'
import Users from '../AdminUsers/users'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './PanelUsers.css'

const PanelUsers = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  const fetching = async () => {
    try {
      const response = await axios.get('http://localhost:2000/users', {
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
          <p>Users</p>
          <p>Admin</p>
        </div>

        {data.data.map((u) => (
          <Users key={u._id} data={u} />
        ))}
      </div>
    </section>
  )
}
export default PanelUsers
