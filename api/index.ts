import express, { Request, Response } from 'express'

const app = express()

app.get('/api/health-check', (req: Request, res: Response) => {
    res.json({ at: new Date() })
})

export default app