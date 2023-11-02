import './Login.css'
import welcome from '../../../Assets/hey.svg'
import thunder from '../../../Assets/ZapIcon-64.gif'
import { Link, useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import Navbar from '../../Navbar/Navbar'
const UserLogin = () => {
  const [data, setData] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

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

  const loginUser = async () => {
    try {
      const response = await axios.post('http://localhost:2000/userslogin', {
        username,
        password,
      })
      const loginData = response.data

      console.log(loginData.data)

      if (loginData.data.error) {
        return validateError(loginData.data.error)
      }

      localStorage.setItem('user', loginData.data.token)
      navigate('/user/profile')
      if (loginData.data.token) {
        return notifySuccess('Successfully entered')
      }

      setData(loginData)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!username && !password) {
      return validateError('Iltimos barchasini toldiring')
    }
    loginUser()
  }

  return (
    <section id='Login'>
      <div className='main__logo'>
        <img className='login__logo' src={welcome} alt='' />
      </div>

      <div className='login_inputs'>
        <div className='wrapper_inputs'>
          <p className='login_text'>
            <span className='system_span'>Sign in</span> to system
          </p>

          <input
            className='sign_input'
            id='login_inp  '
            type='text'
            placeholder='username'
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className='sign_input'
            id='pass_inp  '
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
          />

          <button onClick={handleSubmit} id='sign_btn'>
            <img
              loading='lazy'
              decoding='async'
              data-nimg='1'
              className='thunder_gif'
              src={thunder}
              alt=''
            />
            sign in
          </button>
        </div>
      </div>
      <Link to={'/'}>
        <button id='back__btn'>
          {' '}
          <BiArrowBack
            style={{ fontSize: '20px', fontWeight: '600', paddingRight: '5px' }}
          />{' '}
          Home
        </button>
      </Link>
      <Link to={'/sign'}>
        <button id='navigate__sign__btn'> I haven't an account </button>
      </Link>
    </section>
  )
}
export default UserLogin
