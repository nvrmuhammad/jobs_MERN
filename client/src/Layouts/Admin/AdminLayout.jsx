import { Link } from 'react-router-dom'
import './AdminLayout.css'
import thunder from '../../Assets/ZapIcon-64.gif'

const AdminLayout = () => {
  const handleClearLocalStorage = (e) => {
    e.preventDefault()

    localStorage.removeItem('admin')
    window.location.assign('/loginAdmin')
  }

  return (
    <div id='Layout'>
      <div className='logo__layout'>
        <p>
          inwork<span className='logo__layout__dot'>.</span>
        </p>
      </div>
      <div className='navigators_layout'>
        <Link className='link' to='/dashboard/profile'>
          <div className='layout__navig'>Profile</div>
        </Link>
        <Link className='link' to='/admin/dashboard'>
          <div className='layout__navig'>Admins</div>
        </Link>
        <Link className='link' to='/dashboard/users'>
          <div className='layout__navig'>Users</div>
        </Link>

        <Link className='link' to='/dashboard/company'>
          <div className='layout__navig'>Companies</div>
        </Link>
        <Link className='link' to='/dashboard/addAdmin'>
          <div className='layout__navig'>Add admin</div>
        </Link>

        <Link className='link' to='/dashboard/category'>
          <div className='layout__navig'>Category</div>
        </Link>

        <Link className='link' to='/dashboard/experience'>
          <div className='layout__navig'>Experience</div>
        </Link>
      </div>

      <div>
        {/* <Link className='link' to='/loginAdmin'> */}
        <button onClick={handleClearLocalStorage} id='logout__btn'>
          <img
            loading='lazy'
            decoding='async'
            data-nimg='1'
            className='thunder_gif'
            src={thunder}
            alt=''
          />{' '}
          log out
        </button>
        {/* </Link> */}
      </div>
    </div>
  )
}
export default AdminLayout
