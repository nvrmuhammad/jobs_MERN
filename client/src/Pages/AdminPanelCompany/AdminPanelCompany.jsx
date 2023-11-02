import { AiOutlineDelete } from 'react-icons/ai'
import './AdminPanelCompany.css'
import { useState } from 'react'

const AdminPanelCompany = ({
  data,
  handleRemoveCompany,
  handleAllowCompany,
}) => {
  const [allow, setAllow] = useState(data.is_allow)
  const deleteCompany = (e) => {
    e.preventDefault()
    handleRemoveCompany(data._id)
  }
  const allowCompany = (e) => {
    e.preventDefault()
    handleAllowCompany(data._id)
  }

  return (
    <div className='controllers'>
      <div className='table__user'>
        <div className='info__user first__name'>{data.email}</div>
        <div className='info__user last__name'>{data.name}</div>
        <div className='info__user user__name'>{data.recruiter}</div>
        <button onClick={deleteCompany} id='company__action__btn'>
          <AiOutlineDelete />
        </button>
        <button onClick={allowCompany} id='company__action__btn__allow'>
          {allow ? 'allowed' : 'not allowed'}
        </button>
      </div>
    </div>
  )
}
export default AdminPanelCompany
