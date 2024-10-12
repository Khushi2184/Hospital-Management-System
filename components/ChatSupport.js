// components/ChatSupport.js
import { useState } from 'react';

const ChatSupport = () => {
    const [message, setMessage] = useState("");

    const handleSend = () => {
        console.log("Message Sent: ", message);
        setMessage(""); // Clear the message
    };

    return (
        <div className="fixed bottom-5 right-5 w-80">
            <div className="bg-white p-4 shadow-lg rounded-lg">
                <h2 className="text-xl font-bold">Chat Support</h2>
                <textarea 
                    className="border w-full p-2" 
                    rows="3" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here"
                ></textarea>
                <button onClick={handleSend} className="bg-blue-600 text-white p-2 rounded mt-2">Send</button>
            </div>
        </div>
    );
};

export default ChatSupport;
