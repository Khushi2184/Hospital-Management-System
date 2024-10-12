// pages/index.js
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div>
            <Header />
            <main className="p-6">
                <h2 className="text-2xl font-bold mb-4">Welcome to Our Hospital Management System</h2>
                <p className="mb-4">Manage your health with ease.</p>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
