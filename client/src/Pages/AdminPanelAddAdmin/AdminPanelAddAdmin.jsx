import './AdminPanelAddAdmin.css'

const AdminPanelAddAdmin = ({ data }) => {

  return (
    <div className='wrapper_adminPanel'>
      <div className='adminPanel__nav'>
        <p>Users</p>
        <p>Admin</p>
      </div>
      <div className='controller__form__adding__admin'>
        <p className='adding__txt'>Add new admin</p>
        <form className='form__adding__admin' action='post'>
          <input
            className='adding__admin__inp'
            type='text'
            placeholder='first name'
          />
          <input
            className='adding__admin__inp'
            type='text'
            placeholder='last name'
          />
          <input
            className='adding__admin__inp'
            type='text'
            placeholder='username'
          />
          <input
            className='adding__admin__inp'
            type='text'
            placeholder='password'
          />
          <input
            className='adding__admin__inp'
            type='text'
            placeholder='confirm password'
          />
          <button id='adding__admin__btn' className='adding__admin__inp'>
            save
          </button>
        </form>
      </div>
    </div>
  )
}
export default AdminPanelAddAdmin
