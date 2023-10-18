import { Experience } from '../Schema/Experience.js'

export const ExperienceService = async () => {
  const experiences = await Experience.find()

  return experiences
}
