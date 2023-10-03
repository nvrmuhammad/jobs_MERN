import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { Users } from './Users.js'

export const updateUserService = async ({ body, params }) => {
  const { password } = body
  const hashedPassword = bcrypt.hashSync(password, 10)

  const updatedUser = await Users.findByIdAndUpdate(
    { _id: params.id },
    { ...body, password: hashedPassword },
    { new: true }
  )
  return updatedUser
}
