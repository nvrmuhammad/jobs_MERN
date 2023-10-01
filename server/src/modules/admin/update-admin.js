import mongoose from 'mongoose'
import { Admin } from './Admin.js'
import bcrypt from 'bcrypt'

export const updateAdminService = async ({ body, id }) => {
  const { password } = body
  const hashedPassword = bcrypt.hashSync(password, 10)

  const exsited = await Admin.findByIdAndUpdate(
    { id },
    { ...body, password: hashedPassword },
    { new: true }
  )

  if (exsited) {
    return 'This is admin already existed'
  }
  const newAdmin = await Admin.create(body)
  return newAdmin
}
