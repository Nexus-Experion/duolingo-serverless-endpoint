import type { VercelRequest, VercelResponse } from '@vercel/node';
import germanData from '../individual-lang-page-jsons/german.json' assert {type: 'json'};
import spanishData from '../individual-lang-page-jsons/spanish.json' assert {type: 'json'};
import frenchData from '../individual-lang-page-jsons/french.json' assert {type:'json'};
import japaneseData from '../individual-lang-page-jsons/japanese.json' assert {type:'json'};
import englishData from '../individual-lang-page-jsons/english.json' assert {type:'json'};


export default async function handler(req: VercelRequest, res: VercelResponse) {
    try {
        switch (req.query.lang) {
            case 'de': return res.json(germanData)
            case 'es': return res.json(spanishData)
            case 'fr': return res.json(frenchData)
            case 'ja': return res.json(japaneseData)
            case 'en': return res.json(englishData)
            default: return res.status(400).send({
                message:'No translation available. Sorry!'
            })
        }

    } catch (error) {
        console.error('Error:', error);

        // Send a more detailed error response
        return res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
}

