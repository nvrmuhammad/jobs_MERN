import { accessJobService } from './Service/access-job.js'
import { addJobService } from './Service/add-job.js'
import { listJobServices } from './Service/list-job.js'
import { removeJobService } from './Service/remove-job.js'
import { showJobServices } from './Service/show-job.js'
import { updateJobService } from './Service/update-job.js'

export const listJob = async (req, res, next) => {
  try {
    const result = await listJobServices({ user: req.user })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const showJob = async (req, res, next) => {
  try {
    const result = await showJobServices({ params: req.params })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const addJob = async (req, res, next) => {
  try {
    const result = await addJobService({ body: req.body, user: req.user })

    res.status(201).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const updateJob = async (req, res, next) => {
  try {
    const result = await updateJobService({
      body: req.body,
      user: req.user,
      params: req.params,
    })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const accessJob = async (req, res, next) => {
  try {
    const result = await accessJobService({
      body: req.body,
      user: req.user,
      params: req.params,
    })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const removeJob = async (req, res, next) => {
  try {
    const result = await removeJobService({
      user: req.user,
      params: req.params,
    })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
