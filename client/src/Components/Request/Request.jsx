import {
  FcAddressBook,
  FcCalendar,
  FcDepartment,
  FcFile,
  FcFlashOn,
} from 'react-icons/fc'
import './Request.css'

const RequestComponent = ({ data }) => {
  return (
    <div className='request'>
      <p className='vacancy__req'>
        <FcFile className='req__icon' /> Vacancy name:{' '}
        <p className='data__req'>{data.job_id.name}</p>
      </p>
      <p className='vacancy__req'>
        <FcAddressBook className='req__icon' /> Applicant:
        <p className='data__req'>{data.user_id.username}</p>
      </p>
      <p className='vacancy__req'>
        <FcDepartment className='req__icon' /> Company name:
        <p className='data__req'>{data.company_id.name}</p>
      </p>
      <p className='vacancy__req'>
        <FcFlashOn className='req__icon' /> Is allow:{' '}
        <p className='data__req'>
          {!data.is_allow ? 'not allowed' : 'request completed'}
        </p>
      </p>
      <p className='vacancy__req'>
        <FcCalendar className='req__icon' /> Send request:
        <p className='data__req'>{data.created_at.slice(0, 10)}</p>
      </p>
    </div>
  )
}
export default RequestComponent
