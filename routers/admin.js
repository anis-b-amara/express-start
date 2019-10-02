import express from 'express'

const adminRouter = express.Router()

adminRouter.get('/', (req, res) => {
  console.log(req.baseUrl)
  res.status(200).json({ name: 'Admin', status: 'Valid' })
})

export default adminRouter
