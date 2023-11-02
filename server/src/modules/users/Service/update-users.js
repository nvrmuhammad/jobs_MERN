import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { Users } from '../Schema/Users.js'

export const updateUserService = async ({ body, user, file }) => {
  const { password } = body
  const { filename } = file
  const { id } = user

  // const hashedPassword = bcrypt.hashSync(password, 10)
  const linkAvatar = `${filename}`

  const updatedUser = await Users.findByIdAndUpdate(
    { _id: id },
    { ...body, avatar: linkAvatar },
    { new: true }
  )
  return updatedUser
}
