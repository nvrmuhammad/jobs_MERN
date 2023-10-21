import { Job } from '../Schema/Job.js'

export const listJobServices = async ({ user }) => {
  const { id, role } = user
  if (role == 'user') {
    const list = await Job.find({ is_active: true }).populate([
      {
        path: 'company_id',
        select: 'name ',
      },
      {
        path: 'experience_id',
        select: 'name',
      },
    ])
    return list
  }

  const listVacancy = await Job.find({ company_id: id }).populate([
    {
      path: 'company_id',
      select: 'name ',
    },
    {
      path: 'experience_id',
      select: 'name',
    },
  ])
  return listVacancy
}
