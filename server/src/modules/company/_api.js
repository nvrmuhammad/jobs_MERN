import { Router } from 'express'
import { verify } from '../../middlewares/isLoggedIn.js'
import {
  listCompanies,
  loginCompany,
  registryCompany,
  removeCompanies,
  updateCompany,
} from './_controller.js'
import upload_company from '../../config/company_multer.js'

const router = Router()

router.get('/company', verify, listCompanies)
router.post('/company', upload_company.single('avatar'), registryCompany)
router.post('/companyLogin', loginCompany)
router.put('/company', upload_company.single('avatar'), verify, updateCompany)
router.delete('/company/:id', verify, removeCompanies)
export default router
