import { Company } from '../../company/Schema/Company.js'
import { Job } from '../Schema/Job.js'

export const removeJobService = async ({ user, params }) => {
  const { id, role } = user
  const { id: identify } = params

  if (role !== 'company') {
    return { error: 'You are not company admin , you have not access ' }
  }

  const checking = await Company.findOne({ _id: id })

  if (!checking) {
    return { error: 'Company is not defined' }
  }

  const checkingJob = await Job.findOne({ _id: identify })

  console.log(checkingJob)

  if (checkingJob.company_id != id) {
    return {
      error: 'You can not remove this vacancy because it`s not your post',
    }
  }

  const removeVacancy = await Job.findByIdAndDelete({ _id: identify })
  return removeVacancy
}
