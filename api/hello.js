const VERSION = 'v1'

export default function handler(req, res) {
    res.json({ version: VERSION })
}