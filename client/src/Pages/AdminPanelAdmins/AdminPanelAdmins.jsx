import { useParams } from 'react-router-dom'
import './AdminPanelAdmins.css'
import { AiOutlineDelete } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import axios from 'axios'

const AdminPanelAdmins = ({ data, handleDeleteAdmin }) => {
  const [aData, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const deleteAdmin = async () => {
    handleDeleteAdmin(data._id)
  }

  const handleRemoveAdmin = (e) => {
    e.preventDefault()
    deleteAdmin()
  }

  return (
    <div className='controllers'>
      <div className='table__user'>
        <div className='info__user first__name'>{data.first_name}</div>
        <div className='info__user last__name'>{data.last_name}</div>
        <div className='info__user user__name'>{data.username}</div>
        <button onClick={handleRemoveAdmin} className='btn_delte_user'>
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  )
}
export default AdminPanelAdmins
