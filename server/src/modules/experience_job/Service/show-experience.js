import { Experience } from '../Schema/Experience.js'

export const ShowExperienceService = async ({ params }) => {
  const { id } = params

  const show = await Experience.findOne({ _id: id })

  if (!show) {
    return { error: 'Experience is not defined' }
  }

  return show
}
