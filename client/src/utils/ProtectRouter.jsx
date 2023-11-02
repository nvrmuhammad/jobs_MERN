import { Outlet } from 'react-router-dom'

export const ProtectRouterAdmin = () => {
  let authToken = localStorage.getItem('admin')

  return authToken ? <Outlet /> : window.location.assign('/loginAdmin')
}
export const ProtectRouterUser = () => {
  let authToken = localStorage.getItem('user')
  return authToken ? <Outlet /> : window.location.assign('/login')
}
export const ProtectRouterCompany = () => {
  let authToken = localStorage.getItem('company')
  return authToken ? <Outlet /> : window.location.assign('/company/login')
}
