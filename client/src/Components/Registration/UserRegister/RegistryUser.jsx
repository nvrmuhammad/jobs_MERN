import './RegistryUser.css'
import thunder from '../../../Assets/ZapIcon-64.gif'
import look from '../../../Assets/look_down.svg'
import { Link, useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const RegisteryUser = () => {
  const [file, setFile] = useState()
  const [first_name, setFirstName] = useState()
  const [last_name, setLastName] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [age, setAge] = useState()
  const [resume, setResume] = useState()
  const [portfolio, setPortfolio] = useState()
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const formData = new FormData()
  formData.append('first_name', first_name)
  formData.append('last_name', last_name)
  formData.append('username', username)
  formData.append('password', password)
  formData.append('age', age)
  formData.append('portfolio', portfolio)
  formData.append('resume', resume)
  formData.append('avatar', file)

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

  const registrating = async (body) => {
    try {
      const response = await axios.post('http://localhost:2000/users', body)
      setData(response.data)
      setLoading(false)

      if (response.data.data.error) {
        return validateError(data.data.error)
      }
      if (response.status === 201) {
        return notifySuccess('Successfully registered')
      }

      setFile('')
      setFirstName('')
      setLastName('')
      setUsername('')
      setPassword('')
      setConfirmPassword('')
      setAge('')
      setResume('')
      setPortfolio('')
    } catch (error) {
      console.log(error)
    }
  }

  const handleRegistryUser = (e) => {
    e.preventDefault()
    if (password != confirmPassword) {
      return validateError('Confirm Password incorrect')
    }
    if (file) {
      registrating(formData)
      setLastName()
      setUsername()
      setPassword()
      setConfirmPassword()
      setAge()
      setResume()
      setPortfolio()
      navigate('/login')
    } else {
      return validateError('Set your image')
    }
  }

  // if (loading) {
  //   return <h1>Loading</h1>
  // }
  return (
    <section id='Registry'>
      <div className='main__text'>
        <img src={look} alt='' />
        <div className='text'>Register for users</div>
      </div>

      <form className='register_inputs'>
        <p className='register_text'>Enter the details in full</p>
        <input
          className='register_input'
          type='text'
          value={first_name}
          placeholder='first name'
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className='register_input'
          type='text'
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
          placeholder='last name'
        />
        <input
          value={username}
          className='register_input'
          onChange={(e) => setUsername(e.target.value)}
          type='text'
          placeholder='username'
        />
        <input
          value={password}
          className='register_input'
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='password'
        />
        <input
          className='register_input'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type='password'
          placeholder='confirm password'
        />
        <input
          className='register_input'
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type='number'
          placeholder='age'
        />
        <input
          className='register_input'
          value={resume}
          type='text'
          onChange={(e) => setResume(e.target.value)}
          placeholder='resume link'
        />
        <input
          value={portfolio}
          className='register_input'
          type='text'
          onChange={(e) => setPortfolio(e.target.value)}
          placeholder='portfolio link'
        />

        <input
          className='register_input'
          onChange={(e) => setFile(e.target.files[0])}
          type='file'
          name='file'
        />

        <button onClick={handleRegistryUser} id='register_btn'>
          <img
            loading='lazy'
            decoding='async'
            data-nimg='1'
            className='thunder_gif'
            src={thunder}
            alt=''
          />{' '}
          Registrate
        </button>
      </form>

      <Link to={'/'}>
        <button id='back__btn'>
          {' '}
          <BiArrowBack
            style={{ fontSize: '15px', fontWeight: '600', paddingRight: '5px' }}
          />{' '}
          Home
        </button>
      </Link>
    </section>
  )
}
export default RegisteryUser
