import axios from 'axios'
import { useEffect, useState } from 'react'
import { VscEdit } from 'react-icons/vsc'
import { toast } from 'react-toastify'

const Profile = ({ data }) => {
  const [file, setFile] = useState()
  const [first_name, setFirstName] = useState(data.first_name)
  const [last_name, setLastName] = useState(data.last_name)
  const [username, setUsername] = useState(data.username)
  const [password, setPassword] = useState(data.password)
  const [age, setAge] = useState(data.age)
  const [resume, setResume] = useState(data.resume)
  const [portfolio, setPortfolio] = useState(data.portfolio)

  const [uData, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [disable, setDisable] = useState(true)

  const formData = new FormData()
  formData.append('first_name', first_name)
  formData.append('last_name', last_name)
  formData.append('username', username)
  formData.append('age', age)
  formData.append('portfolio', portfolio)
  formData.append('resume', resume)
  formData.append('avatar', file)
  const update = async () => {
    try {
      const response = await axios.put(
        'http://localhost:2000/users',
        formData,
        {
          headers: {
            Authorization: localStorage.getItem('user'),
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
          <p className='which__detail'>first name:</p>
          <input
            disabled={disable}
            type='text'
            className='detail__user'
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <button
            onClick={disable ? updateUser : saveUser}
            id='edit__btn__user__profile'
          >
            <VscEdit />
          </button>
        </div>

        <div className='main__detail'>
          <p className='which__detail'>last name:</p>

          <input
            disabled={disable}
            type='text'
            className='detail__user'
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
          <button
            onClick={disable ? updateUser : saveUser}
            id='edit__btn__user__profile'
          >
            <VscEdit />
          </button>
        </div>
        <div className='main__detail'>
          <p className='which__detail'>username:</p>
          <input
            disabled={disable}
            type='text'
            className='detail__user'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <p className='which__detail'>age:</p>

          <input
            disabled={disable}
            type='text'
            className='detail__user'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <button
            onClick={disable ? updateUser : saveUser}
            id='edit__btn__user__profile'
          >
            <VscEdit />
          </button>
        </div>
        <div className='main__detail'>
          <p className='which__detail'>resume:</p>

          <input
            disabled={disable}
            type='text'
            className='detail__user'
            value={resume}
            onChange={(e) => setResume(e.target.value)}
          />
          <button
            onClick={disable ? updateUser : saveUser}
            id='edit__btn__user__profile'
          >
            <VscEdit />
          </button>
        </div>
        <div className='main__detail'>
          <p className='which__detail'>portfolio:</p>

          <input
            disabled={disable}
            type='text'
            className='detail__user'
            value={portfolio}
            onChange={(e) => setPortfolio(e.target.value)}
          />
          <button
            onClick={disable ? updateUser : saveUser}
            id='edit__btn__user__profile'
          >
            <VscEdit />
          </button>
        </div>
        <div className='main__detail'>
          <p className='which__detail'>portfolio:</p>

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
export default Profile
