// components/Dashboard.js
import AppointmentForm from './AppointmentForm';

const Dashboard = () => {
    const handleAppointmentSubmit = (appointment) => {
        console.log("Appointment Data: ", appointment);
        // Call API to save appointment
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h2>
            <AppointmentForm onSubmit={handleAppointmentSubmit} />
        </div>
    );
};

export default Dashboard;
