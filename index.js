import express from 'express'
import swaggerUi from 'swagger-ui-express'
import * as swaggerDocument from './swagger.json'

const app = express()

const port = 3000

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.get('/', (_, res) => res.send('Hello world!'))

app.listen(port, () => console.log(`Server running on port ${port}`))
