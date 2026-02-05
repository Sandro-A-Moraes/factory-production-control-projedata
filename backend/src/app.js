import e from 'express'
import cors from 'cors'

const app = e()

app.use(cors())
app.use(e.json())

app.get('/health', (req, res) => {
  res.status(200).send('OK')
})


export default app  
