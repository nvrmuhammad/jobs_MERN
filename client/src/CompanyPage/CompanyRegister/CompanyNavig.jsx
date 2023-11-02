import { Link } from 'react-router-dom'
import './CompanyNavig.css'
import Navbar from '../../Components/Navbar/Navbar'
import CompanyLogin from '../../Components/Logins/CompanyLogin/Login'
import RegisteryCompany from '../../Components/Registration/CompanyRegister/RegisteryCompany'

const CompanyRegister = () => {
  return (
    <section id='Company__navig'>
      <Navbar />

      <div className='company__navigs__main_r'>
        <RegisteryCompany />
      </div>
    </section>
  )
}
export default CompanyRegister
