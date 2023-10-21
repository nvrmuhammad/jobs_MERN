import { Request } from '../../request_job/Schema/Request.js'
import { Company } from '../Schema/Company.js'

export const acceptCompanyWorkerService = async ({ user, params }) => {
  const { id, role } = user
  const { id: identify } = params

  if (role !== 'company') {
    return { error: 'You have not access' }
  }

  const checking = await Company.findOne({ _id: id })

  if (!checking) {
    return { error: 'Company is not defined ' }
  }

  const allowedUser = await Request.findByIdAndUpdate(
    { _id: identify },
    { is_allow: true },
    { new: true }
  )

  let company_workers = checking.workers

  // let isHere = company_workers.find((u) => {
  //   return u == allowedUser.user_id
  // })

  // console.log(isHere)
  // // if (isHere) {
  // //   return { error: 'no no' }
  // // }

  company_workers.push(allowedUser.user_id)

  const addedWorker = await Company.findByIdAndUpdate(
    { _id: id },
    { workers: company_workers },
    { new: true }
  ).populate([
    {
      path: 'workers',
      select: 'username',
    },
  ])
  return addedWorker
}
