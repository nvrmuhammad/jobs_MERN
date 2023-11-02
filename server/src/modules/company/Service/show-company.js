import { Company } from '../Schema/Company.js'

export const showCompaniesServices = async ({ user }) => {
  const show = await Company.findOne({ _id: user.id }).populate([
    {
      path: 'category_id',
      select: 'name _id',
    },
    {
      path: 'workers',
      select: 'username',
    },
  ])

  if (!show) {
    return { error: 'Company is not defined' }
  }

  return show
}
