import Logo from '../../Assets/Inwork+500x500.png'
import './CompanyNavbar.css'
import { Link, NavLink } from 'react-router-dom'

const CompanyNavbar = () => {
  const companyToken = localStorage.getItem('company')
  return (
    <nav id='Navbar'>
      <div className='nav__logo'>
        <Link to={'/home'}>
          <img src={Logo} alt='Logo' />
        </Link>
      </div>

      <div className='nav__navigators'>
        <Link className='navigator__home__navber' to={'/company/profile'}>
          Profile
        </Link>
        <Link className='navigator__home__navber' to={'/company/vacancy'}>
          Add Vacancy
        </Link>
        <Link className='navigator__home__navber' to={'/company/request'}>
          Requests
        </Link>

        <Link
          onClick={() => localStorage.removeItem('company')}
          className='navigator__home__navber'
          to={'/home'}
        >
          log out
        </Link>

        {}
      </div>
    </nav>
  )
}
export default CompanyNavbar
