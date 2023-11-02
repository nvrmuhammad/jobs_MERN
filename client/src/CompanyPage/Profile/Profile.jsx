import axios from 'axios'
import { useEffect, useState } from 'react'
import { VscEdit } from 'react-icons/vsc'
import { toast } from 'react-toastify'

const ProfileCompany = ({ data }) => {
  const [file, setFile] = useState()

  const [email, setEmail] = useState(data.email)
  const [password, setPassword] = useState(data.password)
  const [recruiter, setRecruiter] = useState(data.recruiter)
  const [category, setCategory] = useState(data.category_id.name || 'non')
  const [name, setCompanyName] = useState(data._id)

  const [uData, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [disable, setDisable] = useState(true)

  const formData = new FormData()
  formData.append('email', email)
  formData.append('recruiter', recruiter)
  formData.append('avatar', file)
  formData.append('name', name)
  const update = async () => {
    try {
      const response = await axios.put(
        'http://localhost:2000/company',
        formData,
        {
          headers: {
            Authorization: localStorage.getItem('company'),
          },
        }
      )

      setData(response.data)
      setLoading(false)
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

  const updateUser = () => {
    setDisable(false)
  }
  const saveUser = () => {
    setDisable(true)
  }

  const updeteUser = (e) => {
    e.preventDefault()
    setDisable(true)
    if (file) {
      update()
      return notifySuccess('User updated successfully')
    } else {
      return validateError('Avatarni xam qaytadan yuklang')
    }
  }

  return (
    <div className='profile__details'>
      <div className='avatar__detail'>
        <img
          className='avatar__user'
          src={`http://localhost:2000/${data.avatar}`}
          alt=''
        />
      </div>
      <div className='personal__details'>
        <div className='main__detail'>
          <p className='which__detail'>email:</p>
          <input
            disabled={disable}
            type='text'
            className='detail__user'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={disable ? updateUser : saveUser}
            id='edit__btn__user__profile'
          >
            <VscEdit />
          </button>
        </div>

        <div className='main__detail'>
          <p className='which__detail'>password:</p>

          <input
            disabled={disable}
            type='text'
            className='detail__user'
            value={'*********'}
          />
          <button
            onClick={disable ? updateUser : saveUser}
            id='edit__btn__user__profile'
          >
            <VscEdit />
          </button>
        </div>

        <div className='main__detail'>
          <p className='which__detail'>company name:</p>

          <input
            disabled={disable}
            type='text'
            className='detail__user'
            value={name}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <button
            onClick={disable ? updateUser : saveUser}
            id='edit__btn__user__profile'
          >
            <VscEdit />
          </button>
        </div>
        <div className='main__detail'>
          <p className='which__detail'>recruiter:</p>

          <input
            disabled={disable}
            type='text'
            className='detail__user'
            value={recruiter}
            onChange={(e) => setRecruiter(e.target.value)}
          />
          <button
            onClick={disable ? updateUser : saveUser}
            id='edit__btn__user__profile'
          >
            <VscEdit />
          </button>
        </div>

        <div className='main__detail'>
          <p className='which__detail'>category:</p>

          <input
            disabled={disable}
            type='text'
            className='detail__user'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <button
            onClick={disable ? updateUser : saveUser}
            id='edit__btn__user__profile'
          >
            <VscEdit />
          </button>
        </div>
        <div className='main__detail'>
          <p className='which__detail'>avatar:</p>

          <input
            disabled={disable}
            type='file'
            onChange={(e) => setFile(e.target.files[0])}
            className='detail__user'
          />
          <button
            onClick={disable ? updateUser : saveUser}
            id='edit__btn__user__profile'
          >
            <VscEdit />
          </button>
        </div>
        <div className='main__detail'>
          <button onClick={updeteUser} id='save__me__user'>
            save
          </button>
        </div>
      </div>
    </div>
  )
}
export default ProfileCompany
