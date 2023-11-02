import { Link } from 'react-router-dom'
import './CompanyNavig.css'
import Navbar from '../../Components/Navbar/Navbar'
import CompanyLogin from '../../Components/Logins/CompanyLogin/Login'

const CompanyNavig = () => {
  return (
    <section id='Company__navig'>
      <Navbar />

      <div className='company__navigs__main'>
        <CompanyLogin />
      </div>
    </section>
  )
}
export default CompanyNavig
