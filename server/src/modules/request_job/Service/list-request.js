import { Request } from '../Schema/Request.js'

export const listRequestServices = async ({ user }) => {
  const { role, id } = user
  const checking4User = await Request.find({ user_id: id }).populate([
    { path: 'job_id', select: 'name id' },
    { path: 'user_id', select: 'username id' },
    { path: 'company_id', select: 'name id' },
  ])
  const checking4Company = await Request.find({ company_id: id }).populate([
    { path: 'job_id', select: 'name id' },
    { path: 'user_id', select: 'username id' },
    { path: 'company_id', select: 'name id' },
  ])

  if (role == 'user') {
    return checking4User
  }
  if (role == 'company') {
    return checking4Company
  }

  const listRequest = await Request.find().populate([
    { path: 'job_id', select: 'name id' },
    { path: 'user_id', select: 'username id' },
    { path: 'company_id', select: 'name id' },
  ])

  console.log(listRequest)

  return listRequest
}
