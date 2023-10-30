import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Company } from '../Schema/Company.js'

export const loginCompanyService = async ({ body, user }) => {
  const { email, password } = body

  if (!email && !password) {
    return { error: 'Please enter full' }
  }

  const company = await Company.findOne({
    email: email,
  })

  if (!company) {
    return { error: 'Company not found or not registered' }
  }

  const verifyPass = bcrypt.compareSync(password, company.password)

  if (!verifyPass) {
    return { error: 'Password inccorrect' }
  }

  if (!company.is_allow) {
    return {
      error:
        'Company is not allowed by adminstrators , please wait for some time',
    }
  }

  const token = jwt.sign(
    { id: company._id, role: 'company' },
    process.env.SECRET_KEY
  )

  return token
}
