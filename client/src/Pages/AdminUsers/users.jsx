import './users.css'

const Users = ({ data }) => {
  return (
    <div className='controllers'>
      <div className='table__user'>
        <div className='info__user first__name'>{data.first_name}</div>
        <div className='info__user last__name'>{data.last_name}</div>
        <div className='info__user user__name'>{data.username}</div>
        <div className='info__user age__user'>{data.age}</div>
        <div className='info__user resume__user'>
          <a href={data.resume}>resume link</a>
        </div>
      </div>
    </div>
  )
}
export default Users
