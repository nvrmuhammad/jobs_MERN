import { addRequestService } from './Service/add-request.js'
import { listRequestServices } from './Service/list-request.js'

export const listRequest = async (req, res, next) => {
  try {
    const result = await listRequestServices({ user: req.user })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const addRequest = async (req, res, next) => {
  try {
    const result = await addRequestService({ body: req.body, user: req.user })

    res.status(201).json({ data: result })
  } catch (error) {
    next(error)
  }
}
