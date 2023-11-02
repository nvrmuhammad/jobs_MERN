import { Users } from '../Schema/Users.js'
import bcrypt from 'bcrypt'

export const addUsersService = async ({ body, file }) => {
  const { username, password } = body
  const { filename } = file

  const linkAvatar = `/${filename}`

  const exsited = await Users.findOne({ username: username })
  if (exsited) {
    return { error: 'This is username already existed' }
  }

  const hashedPassword = bcrypt.hashSync(password, 10)

  const newUser = await Users.create({
    ...body,
    password: hashedPassword,
    avatar: linkAvatar || '',
  })

  return newUser
}
