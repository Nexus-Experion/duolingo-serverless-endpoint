import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
    let langs = req.query.lang;
    const response = await fetch('../json-langs/german_lev_1.json'); // Replace with your API endpoint
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }


    return res.json(response)
}
