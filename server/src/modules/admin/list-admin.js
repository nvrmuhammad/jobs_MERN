import { Admin } from './Admin.js'

export const listAdminsServices = async () => {
  const list = await Admin.find()

  return list
}
