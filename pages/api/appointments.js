// pages/api/appointments.js
export default function handler(req, res) {
    if (req.method === 'POST') {
        // Handle appointment creation
        const { doctorId, date } = req.body;
        res.status(201).json({ message: 'Appointment created', doctorId, date });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
