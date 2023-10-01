import { listAdminsServices } from './list-admin.js'
import { addAdminService } from './add-admin.js'

export const listAdmin = async (req, res, next) => {
  try {
    const result = await listAdminsServices()

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}

export const addAdmin = async (req, res, next) => {
  try {
    const result = await addAdminService({ body: req.body })

    res.status(201).json({ data: result })
  } catch (error) {
    next(error)
  }
}
