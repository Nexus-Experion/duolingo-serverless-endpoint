import type { VercelRequest, VercelResponse } from '@vercel/node';
import germanData from '../json-langs/german_lev_1.json' assert {type: 'json'};
import koreanData from '../json-langs/korean.json' assert {type: 'json'};




export default async function handler(req: VercelRequest, res: VercelResponse) {
    try {
        switch (req.query.lang) {
            case 'de': return res.json(germanData)
            // case 'eng':
            default: return res.json({ koreanData })

        }

    } catch (error) {
        console.error('Error:', error);

        // Send a more detailed error response
        return res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
}


