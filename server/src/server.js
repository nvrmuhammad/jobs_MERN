import express from 'express'
import 'dotenv/config'
import db from './config/database.js'
import upload from './config/multer.js'
import path from 'path'
import AdminRouter from './modules/admin/_api.js'
import UsersRouter from './modules/users/_api.js'
import CategoryRouter from './modules/company_category/_api.js'
import CompanyRouter from './modules/company/_api.js'
import JobRouter from './modules/job/_api.js'
import ExperienceRouter from './modules/experience_job/_api.js'
import RequestRouter from './modules/request_job/_api.js'
function server() {
  try {
    const app = express()
    app.use(express.json())
    app.use(AdminRouter)
    app.use(UsersRouter)
    app.use(CategoryRouter)
    app.use(CompanyRouter)
    app.use(JobRouter)
    app.use(ExperienceRouter)
    app.use(RequestRouter)

    app.use(upload.any())
    app.use(
      express.static(path.join(process.cwd(), 'src', 'public', 'user_avatar'))
    )
    app.use(
      express.static(
        path.join(process.cwd(), 'src', 'public', 'company_avatar')
      )
    )

    db()
    app.listen(process.env.PORT, () =>
      console.log(`server is running on port ${process.env.PORT}`)
    )
  } catch (error) {
    console.log(error)
  }
}

server()
