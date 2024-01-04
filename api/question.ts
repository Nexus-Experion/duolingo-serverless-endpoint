import type { VercelRequest, VercelResponse } from '@vercel/node'
import germanData from '../json-langs/german';
export default function handler(req: VercelRequest, res: VercelResponse) {

    return res.json(germanData)
}
