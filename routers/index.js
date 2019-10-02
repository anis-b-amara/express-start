import swaggerUi from 'swagger-ui-express'
import * as swaggerDocument from '../swagger.json'

import AdminRouter from './admin'

const Router = { AdminRouter }

Router.AdminRouter.use('/docs', swaggerUi.serve)
Router.AdminRouter.get('/docs', swaggerUi.setup(swaggerDocument))

export default Router
