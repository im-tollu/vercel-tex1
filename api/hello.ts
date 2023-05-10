import { VercelRequest, VercelResponse } from '@vercel/node'

const VERSION = 'v3'

export default function handler(req: VercelRequest, res: VercelResponse) {
    res.json({ version: VERSION })
}