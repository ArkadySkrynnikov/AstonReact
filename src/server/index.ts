import express from 'express'

const app = express()
const port = 3000

app.use(express.json())

app.get('/api/feature-flags', (_, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.send({ isTelegramShareEnabled: true })
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
