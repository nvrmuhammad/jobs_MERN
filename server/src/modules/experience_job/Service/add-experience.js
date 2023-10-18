import { Admin } from '../../admin/Schema/Admin.js'
import { Experience } from '../Schema/Experience.js'

export const addExperienceService = async ({ body, user }) => {
  const { name } = body

  if (user.role !== 'admin') {
    return { error: 'You are not admin' }
  }

  const checking = await Admin.findOne({ _id: user.id })

  if (!checking) {
    return { error: 'Admin is not defined' }
  }

  const exsited = await Experience.findOne({ name })

  if (exsited) {
    return 'This category has been added'
  }
  const newExperience = await Experience.create({ name })
  return newExperience
}
