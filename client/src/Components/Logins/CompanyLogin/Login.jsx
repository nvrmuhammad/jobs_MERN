import './Login.css'
import welcome from '../../../Assets/hey.svg'
import thunder from '../../../Assets/ZapIcon-64.gif'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
const CompanyLogin = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [loading, setLoading] = useState(true)

  const signupCompany = async () => {
    try {
      const response = await axios.post('http://localhost:2000/companyLogin', {
        email,
        password,
      })

      console.log(response.data.data)

      if (response.data.data.error) {
        return validateError(response.data.data.error)
      }
      notifySuccess('Successfully registered')
      localStorage.setItem('company', response.data.data)
      setLoading(false)
      window.location.assign('/company/profile')
    } catch (error) {
      console.log(error)
    }
  }

  const handleSignUp = (e) => {
    e.preventDefault()

    if (!email || !password) {
      return validateError('Pleace input fully')
    }

    signupCompany()
  }

  // if (loading) {
  //   return <h1>Loading</h1>
  // }

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

  return (
    <section id='Login'>
      <Link id=' registry__company__btn' to={'/company/registration'}>
        <button id='registry__company__btn'>I haven't an account</button>
      </Link>
      <div className='main__logo'>
        <img className='login__logo' src={welcome} alt='' />
      </div>

      <div className='login_inputs'>
        <div className='wrapper_inputs'>
          <p className='login_text'>
            <span className='system_span'>Sign in</span> to company panel
          </p>

          <input
            className='sign_input'
            id='login_inp  '
            type='text'
            placeholder='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='sign_input'
            id='pass_inp  '
            type='password'
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className='button__login'>
            <button onClick={handleSignUp} id='sign_btn'>
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
export default CompanyLogin
