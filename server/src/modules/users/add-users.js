import { Users } from './Users.js'
import bcrypt from 'bcrypt'

export const addUsersService = async ({ body }) => {
  const { username, password } = body

  const hashedPassword = bcrypt.hashSync(password, 10)

  const exsited = await Users.findOne({ username: username })

  if (exsited) {
    return 'This is user already existed'
  }
  const newUser = await Users.create({ ...body, password: hashedPassword })

  return newUser
}
