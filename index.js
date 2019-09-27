import * as express from 'express'

const app = express()

const port = 3000

app.get('/', (_, res) => res.send('Hello world!'))

app.listen(port, () => console.log(`Server running on port ${port}`))