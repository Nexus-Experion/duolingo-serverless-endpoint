import type { VercelRequest, VercelResponse } from '@vercel/node';
import germanData from '../questionaire-json/german.json' assert {type: 'json'};
import spanishData from '../questionaire-json/spanish.json' assert {type: 'json'};
import frenchData from '../questionaire-json/french.json' assert {type:'json'};
import japaneseData from '../questionaire-json/japanese.json' assert {type:'json'};


export default async function handler(req: VercelRequest, res: VercelResponse) {
    try {
        switch (req.query.lang) {
            case 'de': return res.json(germanData)
            case 'es': return res.json(spanishData)
            case 'fr': return res.json(frenchData)
            case 'ja': return res.json(japaneseData)
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


