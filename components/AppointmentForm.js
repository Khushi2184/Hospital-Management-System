// components/AppointmentForm.js
import { useState } from 'react';

const AppointmentForm = ({ onSubmit }) => {
    const [date, setDate] = useState('');
    const [doctorId, setDoctorId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ date, doctorId });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-4">Book Appointment</h2>
            <label className="block mb-2">Select Doctor</label>
            <select value={doctorId} onChange={(e) => setDoctorId(e.target.value)} className="border w-full p-2 mb-4">
                <option value="">Choose a doctor</option>
                <option value="1">Dr. John Doe</option>
                <option value="2">Dr. Jane Smith</option>
            </select>
            <label className="block mb-2">Appointment Date</label>
            <input 
                type="date" 
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
                className="border w-full p-2 mb-4"
            />
            <button type="submit" className="bg-blue-600 text-white p-2 rounded">Submit</button>
        </form>
    );
};

export default AppointmentForm;
