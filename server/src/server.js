import express from 'express'
import 'dotenv/config'
import db from './config/database.js'
import AdminRouter from './modules/admin/_api.js'

function server() {
  try {
    const app = express()
    app.use(express.json())
    app.use(AdminRouter)

    db()
    app.listen(process.env.PORT, () =>
      console.log(`server is running on port ${process.env.PORT}`)
    )
  } catch (error) {
    console.log(error)
  }
}

server()
