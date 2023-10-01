import mongoose from 'mongoose'
import { Admin } from './Admin.js'

export const updateAdminService = async ({ body, id }) => {
  const { first_name, last_name, username, password } = body

  const exsited = await Admin.findByIdAndUpdate(
    { id },
    { first_name, last_name, username, password },
    { new: true }
  )

  if (exsited) {
    return 'This is admin already existed'
  }
  const newAdmin = await Admin.create(body)
  return newAdmin
}
