// pages/api/feedback.js
export default function handler(req, res) {
    if (req.method === 'POST') {
        // Handle feedback submission
        const { feedback } = req.body;
        res.status(201).json({ message: 'Feedback received', feedback });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
