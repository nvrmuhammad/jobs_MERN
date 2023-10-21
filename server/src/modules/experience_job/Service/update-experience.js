import { Admin } from '../../admin/Schema/Admin.js'
import { Experience } from '../Schema/Experience.js'

export const updateExperienceService = async ({ params, user, body }) => {
  const { name } = body

  if (user.role !== 'admin') {
    return { error: 'You are not admin' }
  }

  const checking = await Admin.findOne({ _id: user.id })

  if (!checking) {
    return { error: 'Admin is not defined' }
  }

  const show = await Experience.findOne({ _id: params.id })

  if (!show) {
    return { error: 'Experience is not defined' }
  }

  const updated = await Experience.findByIdAndUpdate(
    {
      _id: params.id,
    },
    { name },
    { new: true }
  )
  return updated
}
