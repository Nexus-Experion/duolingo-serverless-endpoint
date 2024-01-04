import type { VercelRequest, VercelResponse } from '@vercel/node';
import germanData from '../json-langs/german.json' assert {type: 'json'};
import koreanData from '../json-langs/korean.json' assert {type: 'json'};
import spanishData from '../json-langs/spanish.json' assert {type: 'json'};



export default async function handler(req: VercelRequest, res: VercelResponse) {
    try {
        switch (req.query.lang) {
            case 'de': return res.json(germanData)
            case 'es': return res.json(spanishData)
            case 'ko': return res.json(koreanData )
            default: return res.status(400).send({
                message:'This is an error!'
            })
        }

    } catch (error) {
        console.error('Error:', error);

        // Send a more detailed error response
        return res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
}


