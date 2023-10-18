import { Company } from '../Schema/Company.js'

export const removeCompanyService = async ({ params, user }) => {
  const { role } = user
  const { id: identify } = params

  if (role !== 'admin') {
    return { error: 'You are not admin , you have not access ' }
  }

  const checking = await Company.findOne({ _id: identify })

  if (!checking) {
    return { error: 'Company is not defined or not existed' }
  }

  const removeAdmin = await Company.findByIdAndDelete({ _id: identify })
  return removeAdmin
}
