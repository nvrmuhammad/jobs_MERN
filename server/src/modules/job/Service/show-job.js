import { Job } from '../Schema/Job.js'

export const showJobServices = async ({ params }) => {
  const { id } = params
  const show = await Job.findOne({ _id: id }).populate([
    {
      path: 'company_id',
      select: 'name',
    },
  ])

  if (show.is_active == false) {
    return { error: 'Vacancy is not active' }
  }

  return show
}
