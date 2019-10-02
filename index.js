import express from 'express'
import Router from './routers/index'

const app = express()
const port = 3000

app.use('/', Router.AdminRouter)

app.listen(port, () => console.log(`Server running on port ${port}`))
