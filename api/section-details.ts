import type { VercelRequest, VercelResponse } from "@vercel/node";
import spanishSectionOne from "../section-data/spanish-one.json" assert { type: "json" };
export default function handler(req: VercelRequest, res: VercelResponse) {
    const lang=req.query.lang;
    const sectionId=req.query.section;
  try {
    switch (req.query.lang) {
        case 'de': return res.json(spanishSectionOne)
        case 'es': return res.json(spanishSectionOne)
        case 'fr': return res.json(spanishSectionOne)
        case 'ja': return res.json(spanishSectionOne)
        default:return res.json({message:`No data exist for lang=${lang} and section=${sectionId}`})
    }
  } catch (error) {
    console.error("Error:", error);

    // Send a more detailed error response
    return res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
}
