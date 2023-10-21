import { Company } from '../Schema/Company.js'

export const listCompaniesServices = async ({ user }) => {
  const { role, id } = user

  if (role == 'user') {
    return { error: 'you have not access' }
  }
  if (role == 'company') {
    const show = await Company.findOne({ _id: id }).populate([
      {
        path: 'category_id',
        select: 'name _id',
      },
    ])
  }

  const list = await Company.find().populate([
    {
      path: 'category_id',
      select: 'name _id',
    },
    {
      path: 'workers',
      select: 'username',
      
    },
  ])

  return list
}
