import { Job } from '../../job/Schema/Job.js'
import { Users } from '../../users/Schema/Users.js'
import { Request } from '../Schema/Request.js'

export const addRequestService = async ({ body, user }) => {
  const { id, role } = user
  const { job_id } = body

  if (role !== 'user') {
    return { error: 'You have not access to reqeust vacancy' }
  }

  const checking = await Users.findOne({ _id: id })
  if (!checking) {
    return { error: 'User is not defined' }
  } 

  

  const vacancy = await Job.findOne({ _id: job_id })

  if (!vacancy) {
    return { error: 'Vacancy is not defined' }
  }

  const newRequest = await Request.create({
    ...body,
    user_id: id,
    company_id: vacancy.company_id,
    is_allow: false,
  })
  return newRequest
}
