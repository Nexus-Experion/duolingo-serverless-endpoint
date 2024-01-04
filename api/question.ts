import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // let langs = req.query.lang;
    const response = await fetch('../json-langs/german_lev_1.json');
    fetch('../json-langs/german_lev_1.json')
        .then(response => response.json())
        .then(data => { return res.json(data) })


}
