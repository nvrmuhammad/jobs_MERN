import './Login.css'
import welcome from '../../../Assets/hey.svg'
import thunder from '../../../Assets/ZapIcon-64.gif'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const [data, setData] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()  

  // useEffect(() => {
  //   fetching()
  // }, [])

  const fetching = async () => {
    try {
      const response = await axios.post('http://localhost:2000/adminLogin', {
        username,
        password,
      })
      const loginData = response.data

      if (loginData.data.error) {
        return setError('This admin is not defined or password in correct')
      }
      if (loginData.data.error == 'ERR_NETWORK') {
        return setError('Internal error')
      }

      localStorage.setItem('admin', loginData.data.token)
      navigate('/admin/dashboard')

      setData(loginData)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!username && !password) {
      return setError('Iltimos barchasini toldiring')
    }
    fetching()
  }

  return (
    <section id='Login'>
      <div className='main__logo'>
        <img className='login__logo' src={welcome} alt='' />
      </div>

      <div className='login_inputs'>
        <div className='wrapper_inputs'>
          <p className='login_text'>
            <span className='system_span'>Sign in</span> to admin panel
          </p>

          <p>{error}</p>

          <input
            className='sign_input'
            id='login_inp  '
            type='text'
            placeholder='login'
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className='sign_input'
            id='pass_inp  '
            type='password'
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className='button__login'>
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
      </div>
    </section>
  )
}
export default AdminLogin
