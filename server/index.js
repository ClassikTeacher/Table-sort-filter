const express = require('express')
const tableRouter = require('./routes/table.routes')

const PORT = process.env.PORT || 8080
const app = express()

app.use(express.json())
app.use('/api', tableRouter)

app.listen(PORT, () => console.log(`server on PORT: ${PORT}`))
