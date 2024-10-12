// pages/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LoginPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        router.push('/dashboard');
    };

    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit} className="p-6">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <label className="block mb-2">Email:</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="border p-2 mb-4 w-full"
                />
                <label className="block mb-2">Password:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="border p-2 mb-4 w-full"
                />
                <button type="submit" className="bg-blue-600 text-white p-2 rounded">Login</button>
            </form>
            <Footer />
        </div>
    );
};

export default LoginPage;
