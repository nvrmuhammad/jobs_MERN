import { useEffect, useState } from 'react'
import './AdminPanelProfile.css'
import axios from 'axios'
import { VscEdit } from 'react-icons/vsc'

const AdminPanelProfile = ({ data }) => {
  const [disable, setDisable] = useState(true)
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')

  const update = async () => {
    try {
      const response = await axios.put(
        'http://localhost:2000/admins',
        {
          first_name: firstName,
          last_name: lastName,
          username,
        },
        {
          headers: {
            Authorization: localStorage.getItem('admin'),
          },
        }
      )

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const handleEdit = (e) => {
    e.preventDefault()

    setDisable(false)
  }

  const updeteAdmin = (e) => {
    e.preventDefault()

    update()
    window.location.assign('/dashboard/profile')
  }

  useEffect(() => {
    setFirstName(data.first_name)
    setLastName(data.last_name)
    setUsername(data.username)
    // setPassword('******')
  }, [])

  return (
    <div className='controllers'>
      <div className='profile__me'>
        <div className='me__elem first__name__space'>
          {/* <p>{data.first_name}</p> */}
          <input
            className='area__me'
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            disabled={disable}
          />
          <button onClick={handleEdit} id='edit__me'>
            <VscEdit />
          </button>
        </div>
        <div className='me__elem last__name__space'>
          {/* <p>{data.last_name}</p> */}
          <input
            className='area__me'
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            disabled={disable}
          />

          <button onClick={handleEdit} id='edit__me'>
            <VscEdit />
          </button>
        </div>
        <div className='me__elem username__space'>
          {/* <p>{data.username}</p> */}
          <input
            className='area__me'
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={disable}
          />
          <button onClick={handleEdit} id='edit__me'>
            <VscEdit />
          </button>
        </div>
        {/* <div className='me__elem password__space'>
          <input
            className='area__me'
            type='text'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={disable}
          />
          <button onClick={handleEdit} id='edit__me'>
            edit
          </button>
        </div> */}

        <button id='save__me' onClick={updeteAdmin}>
          save
        </button>
      </div>
    </div>
  )
}
export default AdminPanelProfile
