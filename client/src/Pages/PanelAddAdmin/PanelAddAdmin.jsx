import AdminLayout from '../../Layouts/Admin/AdminLayout'
import AdminPanelAddAdmin from '../AdminPanelAddAdmin/AdminPanelAddAdmin'
import axios from 'axios'
import { useState } from 'react'
import './PanelAddAdmin.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const PanelAddAdmin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const fetching = async () => {
    try {
      const response = await axios.post(
        'http://localhost:2000/admins',
        {
          first_name: firstName,
          last_name: lastName,
          username,
          password,
        },
        {
          headers: {
            Authorization: localStorage.getItem('admin'),
          },
        }
      )
      console.log(response)
      const loginData = response.data

      if (loginData.data.error) {
        return setError('This admin is already existed')
      }
      if (loginData.data.error == 'ERR_NETWORK') {
        return setError('Internal error')
      }
      navigate('/admin/dashboard')
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!firstName || !lastName || !username || !password) {

      return validateError('Please enter full')
    }
    if (confirmPassword != password) {
      return validateError('Confirm password is incorrect ')
    }
    fetching()
  }

  return (
    <section id='Admin__panel'>
      <div className='panel'>
        <AdminLayout />
      </div>

      <div className='wrapper_adminPanel'>
        <div className='adminPanel__nav'>
          <p>Add Admins</p>
          <p>Admin</p>
        </div>
        <div className='controller__form__adding__admin'>
          <p className='adding__txt'>Add new admin</p>
          <p>{error}</p>
          <form className='form__adding__admin' action='post'>
            <input
              className='adding__admin__inp'
              type='text'
              placeholder='first name'
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className='adding__admin__inp'
              type='text'
              placeholder='last name'
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              className='adding__admin__inp'
              type='text'
              placeholder='username'
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className='adding__admin__inp'
              type='password'
              placeholder='password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className='adding__admin__inp'
              type='password'
              placeholder='confirm password'
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              id='adding__admin__btn'
              className='adding__admin__inp'
            >
              save
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
export default PanelAddAdmin
