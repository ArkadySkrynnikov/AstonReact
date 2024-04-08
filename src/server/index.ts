import express from 'express'
import * as ROUTE_PATHS from '../app/providers/router/routePaths/pathConstants.ts'

const app = express()
const port = 3000

app.use(express.json())

app.get(ROUTE_PATHS.API_GET_FEATURE, (_, res) => {
    res.header('Access-Control-Allow-Origin', ROUTE_PATHS.APP_URL)
    res.send({ isTelegramShareEnabled: true })
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
