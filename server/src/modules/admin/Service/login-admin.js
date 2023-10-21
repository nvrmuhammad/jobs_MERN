import { Admin } from '../Schema/Admin.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const loginAdminService = async ({ body }) => {
  const { username, password } = body

  const admin = await Admin.findOne({
    username: username,
  })

  if (!admin) {
    return 'This user is not registered or not found'
  }

  const verifyPass = bcrypt.compareSync(password, admin.password)

  if (!verifyPass) {
    return 'Password inccorrect'
  }

  const token = jwt.sign(
    { id: admin._id, role: 'admin' },
    process.env.SECRET_KEY
  )

  return token
}
