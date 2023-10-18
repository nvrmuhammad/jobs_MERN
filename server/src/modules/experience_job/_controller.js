import { addExperienceService } from './Service/add-experience.js'
import { ExperienceService } from './Service/list-experience.js'
import { removeExperienceService } from './Service/remove-experience.js'
import { ShowExperienceService } from './Service/show-experience.js'
import { updateExperienceService } from './Service/update-experience.js'

export const listExperience = async (req, res, next) => {
  try {
    const result = await ExperienceService()

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const addExperience = async (req, res, next) => {
  try {
    const result = await addExperienceService({
      body: req.body,
      user: req.user,
    })

    res.status(201).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const removeExperience = async (req, res, next) => {
  try {
    const result = await removeExperienceService({
      params: req.params,
      user: req.user,
    })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const updateExperience = async (req, res, next) => {
  try {
    const result = await updateExperienceService({
      params: req.params,
      user: req.user,
      body: req.body,
    })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
