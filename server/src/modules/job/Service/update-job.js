import { Company } from '../../company/Schema/Company.js'
import { Job } from '../Schema/Job.js'

export const updateJobService = async ({ body, user, params }) => {
  const { id, role } = user
  const { id: identify } = params

  if (role !== 'company') {
    return { error: 'You are not company admin' }
  }

  const checking = await Company.findOne({ _id: id })

  if (!checking) {
    return { error: 'Company is not defined ' }
  }

  const vacancy = await Job.findOne({ _id: identify })

  if (vacancy.company_id != id) {
    return { error: 'This vacancy is not your company`s' }
  }

  const updatedVacancy = await Job.findByIdAndUpdate(
    { _id: identify },
    { ...body },
    { new: true }
  ).populate([
    {
      path: 'company_id',
      select: 'name ',
    },
  ])
  return updatedVacancy
}
