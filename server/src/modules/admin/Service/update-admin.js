import mongoose from 'mongoose'
import { Admin } from '../Schema/Admin.js'
import bcrypt from 'bcrypt'

export const updateAdminService = async ({ body, user }) => {
  // const { password } = body
  const { id, role } = user

  if (role !== 'admin') {
    return { error: 'You are not admin' }
  }

  const checking = await Admin.findOne({ _id: id })

  if (!checking) {
    return { error: 'Admin is not defined ' }
  }

  // const hashedPassword = bcrypt.hashSync(password, 10)

  const updatedAdmin = await Admin.findByIdAndUpdate(
    { _id: id },
    { ...body },
    { new: true }
  )
  return updatedAdmin
}
