'use client';

import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

interface Message {
    text: string;
    isUser: boolean;
}

const AIChat: React.FC = () => {
    const { transcription } = useAppContext();
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, isUser: true }]);
            // Here you would typically send the message to an AI service and get a response
            // For now, we'll just mock a response
            setTimeout(() => {
                setMessages(prev => [...prev, { text: `AI response to: ${input}`, isUser: false }]);
            }, 1000);
            setInput('');
        }
    };

    if (!transcription) {
        return null;
    }

    return (
        <div className="bg-base-200 p-4 rounded-lg">
            <h2 className="font-semibold mb-2">AI Chat</h2>
            <div className="space-y-2 mb-4">
                {messages.map((message, index) => (
                    <div key={index} className={`chat ${message.isUser ? 'chat-end' : 'chat-start'}`}>
                        <div className="chat-bubble">{message.text}</div>
                    </div>
                ))}
            </div>
            <div className="flex">
                <input
                    type="text"
                    placeholder="Type a message..."
                    className="input input-bordered flex-grow"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <button className="btn ml-2" onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default AIChat;