import { useEffect, useState } from 'react'
import AdminLayout from '../../Layouts/Admin/AdminLayout'

import './PanelExperience.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import Experience from '../AdminPanelExperience/Experience'

const PanelCategory = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [nameCategory, setNameCategory] = useState('')
  const [delData, setDelData] = useState([])

  const fetching = async () => {
    try {
      const response = await axios.get('http://localhost:2000/experience', {
        headers: {
          Authorization: localStorage.getItem('admin'),
        },
      })

      setData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const notifyError = (msg) => {
    toast.error(msg, {
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

  const handleDeleteCategory = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:2000/experience/${id}`,
        {
          headers: {
            Authorization: localStorage.getItem('admin'),
          },
        }
      )
      const categoryData = response.data
      setDelData(categoryData)
      fetching()
      if (categoryData.data.error) {
        notifyError(response.data.data.error)
      }
      if (!categoryData.data.error) {
        notifySuccess('Successfully deleted')
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdateCategory = async (id, value) => {
    try {
      const response = await axios.put(
        `http://localhost:2000/experience/${id}`,
        {
          name: value,
        },
        {
          headers: {
            Authorization: localStorage.getItem('admin'),
          },
        }
      )

      const categoryData = response.data
      setDelData(categoryData)
      fetching()
      // if (categoryData.data.error) {
      //   notifyError(response.data.data.error)
      // }
      // if (!categoryData.data.error) {
      //   notifySuccess('Successfully updated')
      // }
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handlePostCategory = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        `http://localhost:2000/experience`,
        {
          name: nameCategory,
        },
        {
          headers: {
            Authorization: localStorage.getItem('admin'),
          },
        }
      )
      const categoryData = response.data
      console.log(categoryData)
      // setDelData(categoryData)
      fetching()
      if (categoryData.data.error) {
        notifyError(response.data.data.error)
      }

      if (!categoryData.data.error) {
        notifySuccess('Successfully added')
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
    }

    if (!nameCategory) {
      notifyError('Please enter full')
    }

    setNameCategory('')
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
          <p>Experience</p>
          <p>Admin</p>
        </div>
        <form className='form__categories'>
          <input
            className='adding__admin__inp'
            type='text'
            placeholder='experience name  '
            value={nameCategory}
            onChange={(e) => {
              setNameCategory(e.target.value)
            }}
          />
          <button
            onClick={handlePostCategory}
            id='adding__admin__btn'
            className='adding__admin__inp'
          >
            save
          </button>
        </form>
        <div className='controller__category'>
          {data.data.map((e) => (
            <Experience
              key={e._id}
              data={e}
              handleDeleteCategory={(id) => handleDeleteCategory(id)}
              handleUpdateCategory={(id, value) =>
                handleUpdateCategory(id, value)
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
export default PanelCategory
