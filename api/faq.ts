import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const responseData = {
    "Using Duolingo": {
        "questions": [
            {
                "question": "Why did my course change?",
                "answer": "Course changes can occur due to updates, improvements, or adjustments to the Duolingo curriculum."
            },
            {
                "question": "What is a streak?",
                "answer": "A streak in Duolingo represents the consecutive days a user has practiced on the platform without a break."
            },
            {
                "question": "What are leaderboards and leagues?",
                "answer": "Leaderboards and leagues in Duolingo foster friendly competition by ranking users based on their language learning progress and daily achievements."
            },
            {
                "question": "Does Duolingo use any open source libraries?",
                "answer": "Yes, Duolingo utilizes various open source libraries as part of its technology stack to enhance the learning experience."
            }
        ]
    },
    "NOT Using Duolingo": {
        "questions": [
            {
                "question": "Why did my course change?",
                "answer": "Course changes can occur due to updates, improvements, or adjustments to the Duolingo curriculum."
            },
            {
                "question": "What is a streak?",
                "answer": "A streak in Duolingo represents the consecutive days a user has practiced on the platform without a break."
            },
            {
                "question": "What are leaderboards and leagues?",
                "answer": "Leaderboards and leagues in Duolingo foster friendly competition by ranking users based on their language learning progress and daily achievements."
            },
            {
                "question": "Does Duolingo use any open source libraries?",
                "answer": "Yes, Duolingo utilizes various open source libraries as part of its technology stack to enhance the learning experience."
            }
        ]
    },
}
  return res.json(responseData)
}
