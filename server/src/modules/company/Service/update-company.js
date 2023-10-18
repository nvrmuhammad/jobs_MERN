import { Company } from '../Schema/Company.js'
import bcrypt from 'bcrypt'

export const updateCompanyService = async ({ body, user, file }) => {
  const { password } = body
  const { id, role } = user
  const { filename } = file

  const linkAvatar = `http://localhost:2000/${filename}`

  if (role !== 'company') {
    return { error: 'You are not company admin' }
  }

  const checking = await Company.findOne({ _id: id })

  if (!checking) {
    return { error: 'Company is not defined ' }
  }
  const hashedPassword = bcrypt.hashSync(password, 10)
  const updatedCompany = await Company.findByIdAndUpdate(
    { _id: id },
    { ...body, avatar: linkAvatar, password: hashedPassword },
    { new: true }
  ).populate([
    {
      path: 'category_id',
    },
  ])
  return updatedCompany
}
