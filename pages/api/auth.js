// pages/api/auth.js
export default function handler(req, res) {
    const { method } = req;

    if (method === 'POST') {
        // Mock authentication logic
        const { email, password } = req.body;
        if (email === 'test@test.com' && password === 'password') {
            res.status(200).json({ message: 'Authenticated' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
}
