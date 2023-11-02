import './RegisteryCompany.css'
import thunder from '../../../Assets/ZapIcon-64.gif'
import look from '../../../Assets/look_down.svg'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const RegisteryCompany = () => {
  const [file, setFile] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [name, setNameCompany] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [recruiter, setRecruiter] = useState()
  const [category, setCategory] = useState()
  const [info, setInfo] = useState()

  const [cData, setcData] = useState([])
  const [loading, setLoading] = useState(true)
  const [disable, setDisable] = useState(true)

  const formData = new FormData()
  formData.append('email', email)
  formData.append('password', password)
  formData.append('name', name)
  formData.append('recruiter', recruiter)
  formData.append('category_id', category)
  formData.append('info', info)
  formData.append('avatar', file)

  const listCategory = async () => {
    try {
      const response = await axios.get(
        'http://localhost:2000/companyCategories'
      )

      setcData(response.data)
      setCategory(response.data.data[0]._id)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    listCategory()
  }, [])

  const signupCompany = async () => {
    try {
      const response = await axios.post(
        'http://localhost:2000/company',
        formData
      )

      if (response.data.data.error) {
        return validateError(response.data.data.error)
      }
      notifySuccess('Successfully registered')

      setLoading(false)
      window.location.assign('/company/login')
    } catch (error) {
      console.log(error)
    }
  }

  const handleSignUp = (e) => {
    e.preventDefault()

    if (
      !file ||
      !email ||
      !password ||
      !name ||
      !confirmPassword ||
      !recruiter ||
      !category ||
      !info
    ) {
      return validateError('Pleace input fully')
    }
    if (confirmPassword != password) {
      return validateError('Confirm password is incorrect')
    }

    if (file) {
      signupCompany()
    } else {
      return validateError('Please avatar must be fully')
    }
  }

  if (loading) {
    return <h1>Loading</h1>
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
    <section id='Registry'>
      <div className='main__text'>
        <img src={look} alt='' />
        <div className='text_comp'>Register for Company</div>
      </div>

      <div className='register_inputs'>
        <p className='register_text'>Enter the details in full</p>
        <input
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          value={email}
          className='register_input'
          type='text'
          placeholder='email'
        />
        <input
          className='register_input'
          type='password'
          placeholder='password'
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          value={password}
        />
        <input
          className='register_input'
          type='password'
          placeholder='confirm password'
          onChange={(e) => {
            setConfirmPassword(e.target.value)
          }}
          value={confirmPassword}
        />
        <input
          className='register_input'
          type='text'
          placeholder='name of company'
          onChange={(e) => {
            setNameCompany(e.target.value)
          }}
          value={name}
        />
        <input
          className='register_input'
          type='text'
          placeholder='director name'
          onChange={(e) => {
            setRecruiter(e.target.value)
          }}
          value={recruiter}
        />
        <input
          onChange={(e) => {
            setInfo(e.target.value)
          }}
          className='register_input'
          type='text'
          placeholder='info'
          value={info}
        />
        <select
          name=''
          id='selections_registerCompany'
          onChange={(e) => setCategory(e.target.value)}
        >
          {cData.data.map((c) => (
            <option value={c._id}>{c.name}</option>
          ))}
        </select>
        <input
          onChange={(e) => {
            setFile(e.target.files[0])
          }}
          className='register_input'
          type='file'
        />

        <button onClick={handleSignUp} id='register_btn'>
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
      </div>
    </section>
  )
}
export default RegisteryCompany
