import Logo from '../../Assets/Inwork+500x500.png'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const userToken = localStorage.getItem('user')
  return (
    <nav id='Navbar'>
      <div className='nav__logo'>
        <Link to={'/home'}>
          <img src={Logo} alt='Logo' />
        </Link>
      </div>

      <div className='nav__navigators'>
        <Link className='navigator__home__navber' to={'/home'}>
          Home
        </Link>
        <Link className='navigator__home__navber' to={'/vacancy'}>
          Vacancy
        </Link>
        <Link className='navigator__home__navber' to={'/user/request'}>
          Request
        </Link>
        <Link className='navigator__home__navber' to={'/user/profile'}>
          Profile
        </Link>

        {!userToken ? (
          <>
            <Link className='navigator__home__navber' to={'/sign'}>
              Register
            </Link>
            <Link className='navigator__home__navber' to={'/login'}>
              Login
            </Link>
            <Link className='navigator__home__navber' to={'/company/login'}>
              Company
            </Link>
          </>
        ) : (
          <Link
            onClick={() => localStorage.clear()}
            className='navigator__home__navber'
            to={'/login'}
          >
            log out
          </Link>
        )}

        {}
      </div>
    </nav>
  )
}
export default Navbar
