import { Routes, Route } from 'react-router-dom'
import RegisteryUser from '../Components/Registration/UserRegister/RegistryUser'
import AdminPanel from '../Pages/PanelAdmins/AdminPanel'
import PanelUsers from '../Pages/PanelUsers/PanelUsers'
import PanelCompanies from '../Pages/PanelCompanies/PanelCompanies'
import PanelAddAdmin from '../Pages/PanelAddAdmin/PanelAddAdmin'
import PanelCategory from '../Pages/PanelCategory/PanelCategory'
import PanelExperience from '../Pages/PanelExperience/PanelExperience'
import UserLogin from '../Components/Logins/UserLogin/Login'
import AdminLogin from '../Components/Logins/AdminLogin copy/Login'
import {
  ProtectRouterAdmin,
  ProtectRouterCompany,
  ProtectRouterUser,
} from '../utils/ProtectRouter'
import PanelProfile from '../Pages/PanelProfile/PanelProfile'
import Home from '../UserPage/HomePage/Home'
import Vacancy from '../UserPage/VacancyPage/Vacancy'
import UserProfile from '../UserPage/UserProfile/UserProfile'
import Request from '../UserPage/UserRequests/Request'
import CompanyNavig from '../CompanyPage/CompanyNavigators/CompanyNavig'
import RegisteryCompany from '../Components/Registration/CompanyRegister/RegisteryCompany'
import CompanyRegister from '../CompanyPage/CompanyRegister/CompanyNavig'
import CompanyProfile from '../CompanyPage/CompanyProfile/CompanyProfile'
import AddVacancy from '../CompanyPage/CompanyAddVacancy/AddVacancy'
import CompanyRequest from '../CompanyPage/CompanyRequests/CompanyRequest'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route element={<ProtectRouterAdmin />}>
          <Route path='/admin/dashboard' element={<AdminPanel />} />
          <Route path='/dashboard/profile' element={<PanelProfile />} />
          <Route path='/dashboard/users' element={<PanelUsers />} />
          <Route path='/dashboard/company' element={<PanelCompanies />} />
          <Route path='/dashboard/addAdmin' element={<PanelAddAdmin />} />
          <Route path='/dashboard/category' element={<PanelCategory />} />
          <Route path='/dashboard/experience' element={<PanelExperience />} />
        </Route>

        <Route element={<ProtectRouterUser />}>
          <Route path='/vacancy' element={<Vacancy />} />
          <Route path='/user/profile' element={<UserProfile />} />
          <Route path='/user/request' element={<Request />} />
        </Route>

        <Route element={<ProtectRouterCompany />}>
          <Route path='/company/profile' element={<CompanyProfile />} />
          <Route path='/company/vacancy' element={<AddVacancy />} />
          <Route path='/company/request' element={<CompanyRequest />} />
        </Route>

        <Route path='/home' element={<Home />} />
        <Route path='*' element={<h1>Not found</h1>} />
        <Route path='/' element={<Home />} />
        <Route path='/loginAdmin' element={<AdminLogin />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/sign' element={<RegisteryUser />} />
        <Route path='/company/registration' element={<CompanyRegister />} />
        <Route path='/company/login' element={<CompanyNavig />} />
      </Routes>
    </>
  )
}
export default Routing
