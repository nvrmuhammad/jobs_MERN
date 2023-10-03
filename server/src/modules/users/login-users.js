import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Users } from './Users.js'

export const loginUsersService = async ({ body }) => {
  const { username, password } = body

  const user = await Users.findOne({
    username: username,
  })

  if (!user) {
    return 'This user is not registered or not found'
  }

  const verifyPass = bcrypt.compareSync(password, user.password)

  if (!verifyPass) {
    return 'Password inccorrect'
  }

  const token = jwt.sign(
    { id: user._id, role: 'user' },
    process.env.SECRET_KEY,
    { expiresIn: '1d' }
  )

  return token
}
