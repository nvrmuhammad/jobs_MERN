import './Vacancy.css'
import { LuBuilding2 } from 'react-icons/lu'
import { AiOutlineUser } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { FcMoneyTransfer } from 'react-icons/fc'
import { BsCalendarDate } from 'react-icons/bs'
import axios from 'axios'
import { toast } from 'react-toastify'

const VacancyModel = ({ data }) => {
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

  const request = async (id) => {
    try {
      const response = await axios.post(
        'http://localhost:2000/request',
        {
          job_id: id,
        },
        {
          headers: {
            Authorization: localStorage.getItem('user'),
          },
        }
      )

      console.log(response.data.data)
      if (response.data.data.error) {
        return validateError(response.data.data.error)
      }
      notifySuccess('successfully requested')
    } catch (error) {
      console.log(error)
    }
  }

  const handleRequestToVacancy = (id) => {
    request(id)
  }

  console.log(data)

  return (
    <div className='vacancy__model'>
      <div className='info__vacancy'>
        <div className='vacancy__name'>
          <p>{data.name}</p>
        </div>
        <div className='vacancy__info'>
          <p>{data.requirements}</p>
        </div>
      </div>
      <div className='vacancy__details'>
        <div className='datailer'>
          <div className='vacancy__detail vacancy__company'>
            <LuBuilding2 className='icon__vacancy' /> {data.company_id.name}
          </div>

          <div className='vacancy__detail vacancy__location'>
            <HiOutlineLocationMarker className='icon__vacancy' />
            {data.location}
          </div>
        </div>
        <div className='datailer'>
          <div className='vacancy__detail vacancy__salary'>
            <FcMoneyTransfer className='icon__vacancy' />
            {data.salary}
          </div>
          <div className='vacancy__detail vacancy__salary'>
            <BsCalendarDate className='icon__vacancy' />
            {data.created_at.slice(0, 10)}
          </div>
        </div>
      </div>
      <di v className='vacancy__detail vacancy__category'>
        <p className='category__name'>{data.experience_id.name || 'none'}</p>
        <button
          onClick={() => handleRequestToVacancy(data._id)}
          id='request__vacancy'
        >
          request
        </button>
      </di>
    </div>
  )
}
export default VacancyModel
