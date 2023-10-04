import express from 'express'
import 'dotenv/config'
import db from './config/database.js'
import AdminRouter from './modules/admin/_api.js'
import UsersRouter from './modules/users/_api.js'
import CategoryRouter from './modules/company_category/_api.js'

function server() {
  try {
    const app = express()
    app.use(express.json())
    app.use(AdminRouter)
    app.use(UsersRouter)
    app.use(CategoryRouter)

    db()
    app.listen(process.env.PORT, () =>
      console.log(`server is running on port ${process.env.PORT}`)
    )
  } catch (error) {
    console.log(error)
  }
}

server()
