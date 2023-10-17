import { listAdminsServices } from './list-admin.js'
import { addAdminService } from './add-admin.js'
import { updateAdminService } from './update-admin.js'
import { removeAdminService } from './remove-admin.js'
import { loginAdminService } from './login-admin.js'
import { showAdminsServices } from './show-admin.js'

export const listAdmin = async (req, res, next) => {
  try {
    const result = await listAdminsServices({ user: req.user })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const showAdmin = async (req, res, next) => {
  try {
    const result = await showAdminsServices({
      params: req.params,
      user: req.user,
    })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}

export const addAdmin = async (req, res, next) => {
  try {
    const result = await addAdminService({
      body: req.body,
      user: req.user,
    })

    res.status(201).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const updateAdmin = async (req, res, next) => {
  try {
    const result = await updateAdminService({
      body: req.body,
      user: req.user,
    })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}

export const removeAdmin = async (req, res, next) => {
  try {
    const result = await removeAdminService({ user: req.user })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}

export const loginAdmin = async (req, res, next) => {
  try {
    const result = await loginAdminService({ body: req.body })

    res.status(200).json({ token: result })
  } catch (error) {
    next(error)
  }
}
