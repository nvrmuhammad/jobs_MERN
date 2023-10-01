import { listAdminsServices } from './list-admin.js'
import { addAdminService } from './add-admin.js'
import { updateAdminService } from './update-admin.js'
import { removeAdminService } from './remove-admin.js'

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
export const updateAdmin = async (req, res, next) => {
  try {
    const result = await updateAdminService({ body: req.body, id: req.params })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}

export const removeAdmin = async (req, res, next) => {
  try {
    const result = await removeAdminService({ params: req.params })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
