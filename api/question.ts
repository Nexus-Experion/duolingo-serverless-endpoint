import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
    let langs = req.query.lang;
    return res.json(langs)
}
