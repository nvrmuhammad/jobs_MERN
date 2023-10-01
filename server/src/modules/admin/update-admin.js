import mongoose from 'mongoose'
import { Admin } from './Admin.js'
import bcrypt from 'bcrypt'

export const updateAdminService = async ({ body, id }) => {
  const { password } = body

  const hashedPassword = bcrypt.hashSync(password, 10)

  const updatedAdmin = await Admin.findByIdAndUpdate(
    { _id: id.id },
    { ...body, password: hashedPassword },
    { new: true }
  )
  return updatedAdmin
}
