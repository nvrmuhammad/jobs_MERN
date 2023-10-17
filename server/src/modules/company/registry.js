import { Company } from './Company.js'
import bcrypt from 'bcrypt'

export const registryCompanyService = async ({ body, file }) => {
  const { email, password } = body
  const { filename } = file

  const linkAvatar = `http://localhost:2000/${filename}`

  const exsited = await Company.findOne({ email: email })
  if (exsited) {
    return { error: 'This is email already existed' }
  }

  const hashedPassword = bcrypt.hashSync(password, 10)

  const newCompany = await Company.create({
    ...body,
    password: hashedPassword,
    avatar: linkAvatar,
  })

  return newCompany
}
