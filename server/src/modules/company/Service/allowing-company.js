import { Request } from '../../request_job/Schema/Request.js'
import { Company } from '../Schema/Company.js'

export const allowCompanyService = async ({ user, params }) => {
  const { id, role } = user
  const { id: identify } = params

  if (role !== 'admin') {
    return { error: 'You have not access' }
  }

  const checking = await Company.findOne({ _id: identify })

  if (!checking) {
    return { error: 'Company is not defined ' }
  }

  const allowing = await Company.findByIdAndUpdate(
    { _id: identify },
    { is_allow: true },
    { new: true }
  )

  return allowing
}
