import { listAdminsServices } from './Service/list-admin.js'
import { addAdminService } from './Service/add-admin.js'
import { updateAdminService } from './Service/update-admin.js'
import { removeAdminService } from './Service/remove-admin.js'
import { loginAdminService } from './Service/login-admin.js'
import { showAdminsServices } from './Service/show-admin.js'
import { showMeAdminsServices } from './Service/show-me-admin.js'
import { authSignup } from '../../utils/joi.js'

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
export const showMeAdmin = async (req, res, next) => {
  try {
    const result = await showMeAdminsServices({
      user: req.user,
    })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}

export const addAdmin = async (req, res, next) => {
  try {
    const { error } = authSignup.validate(req.body)
    if (error) {
      return res.status(400).json({ error: error.message })
    }

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
    const result = await removeAdminService({
      user: req.user,
      params: req.params,
    })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}

export const loginAdmin = async (req, res, next) => {
  try {
    const result = await loginAdminService({ body: req.body })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
