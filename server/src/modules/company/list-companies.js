import { Company } from './Company.js'

export const listCompaniesServices = async ({ user }) => {
  const { role } = user

  if (role !== 'admin') {
    return { error: 'you have not access' }
  }

  const list = await Company.find().populate([
    {
      path: 'category_id',
      select: 'name _id',
    },
  ])

  return list
}
