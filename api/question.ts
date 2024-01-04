import type { VercelRequest, VercelResponse } from '@vercel/node';
// import "../json-langs/german_lev_1.json" as
// import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    try {
        const filePath = path.join(__dirname, '..', 'json-langs', 'german_lev_1.json');
        const response = await fetch(`file://${filePath}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const data = await response.json();
        return res.json(data);
    } catch (error) {
        console.error('Error:', error);

        // Send a more detailed error response
        return res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
}
