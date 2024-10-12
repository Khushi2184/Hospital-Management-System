// components/Notification.js
import { toast } from 'react-toastify';

const Notification = ({ message }) => {
    return (
        <div>
            {toast(message)}
        </div>
    );
};

export default Notification;
