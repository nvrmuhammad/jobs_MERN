import { Admin } from '../../admin/Schema/Admin.js'
import { Experience } from '../Schema/Experience.js'

export const removeExperienceService = async ({ params, user }) => {
  if (user.role !== 'admin') {
    return { error: 'You are not admin' }
  }

  const checking = await Admin.findOne({ _id: user.id })

  if (!checking) {
    return { error: 'Admin is not defined' }
  }

  const checking_ID = await Experience.findOne({ _id: params.id })
  if (!checking_ID) {
    return { error: 'Experience data is not defined' }
  }

  const removed = await Experience.findByIdAndDelete({
    _id: params.id,
  })
  return removed
}
