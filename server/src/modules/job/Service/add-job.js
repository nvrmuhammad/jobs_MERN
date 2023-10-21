import { Company } from '../../company/Schema/Company.js'
import { Job } from '../Schema/Job.js'

export const addJobService = async ({ body, user }) => {
  const { name } = body
  const { id, role } = user

  const checking = await Company.findOne({ _id: id })
  if (!checking) {
    return { error: 'Company is not defined' }
  }

  if (role !== 'company') {
    return { error: 'You have not access' }
  }

  const newVacancy = await Job.create({
    ...body,
    is_active: true,
    company_id: id,
  })
  return newVacancy
}
