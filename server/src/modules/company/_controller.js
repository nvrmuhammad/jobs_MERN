import { companySignup } from '../../utils/joi.js'
import { acceptCompanyWorkerService } from './Service/accepting.js'
import { allowCompanyService } from './Service/allowing-company.js'
import { listCompaniesServices } from './Service/list-companies.js'
import { loginCompanyService } from './Service/login-company.js'
import { registryCompanyService } from './Service/registry.js'
import { removeCompanyService } from './Service/remove-company.js'
import { showCompaniesServices } from './Service/show-company.js'
import { updateCompanyService } from './Service/update-company.js'

export const listCompanies = async (req, res, next) => {
  try {
    const result = await listCompaniesServices({
      user: req.user,
    })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const registryCompany = async (req, res, next) => {
  try {
    const { error } = companySignup.validate(req.body)
    if (error) {
      return res.status(400).json({ error: error.message })
    }
    const result = await registryCompanyService({
      body: req.body,
      file: req.file,
    })

    res.status(201).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const loginCompany = async (req, res, next) => {
  try {
    const result = await loginCompanyService({ user: req.user, body: req.body })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const updateCompany = async (req, res, next) => {
  try {
    const result = await updateCompanyService({
      user: req.user,
      body: req.body,
      file: req.file,
    })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const accessCompanyWorker = async (req, res, next) => {
  try {
    const result = await acceptCompanyWorkerService({
      user: req.user,
      params: req.params,
    })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const allowCompany = async (req, res, next) => {
  try {
    const result = await allowCompanyService({
      user: req.user,
      params: req.params,
    })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}

export const removeCompanies = async (req, res, next) => {
  try {
    const result = await removeCompanyService({
      user: req.user,
      params: req.params,
    })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const showCompanies = async (req, res, next) => {
  try {
    const result = await showCompaniesServices({
      user: req.user,
    })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
