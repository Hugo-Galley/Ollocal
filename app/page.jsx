'use client';
import '@/app/styles/Home.css';
import DialogBox from "@/components/DialogBox";
import MessageBox from '@/components/MessageBox';
import MessageBoxAi from '@/components/MessageBoxAi';
import { useState, useEffect, useRef } from 'react';
import {TalkWithAI} from '@/app/scripts/talkwithAi.Js' 

export default function Home() {
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const handleNewMessage = (message) => {
        setMessages(prevMessages => [...prevMessages, { text: message, sender: 'user' }]);
        
        setTimeout(() => {
            askToAI(message)
        }, 1000);
    };

    const askToAI = async (message) => {
        setLoading(true);
        setMessages(prevMessages => [...prevMessages, { text: '...', sender: 'ai' }]);
        let response = await TalkWithAI(message);
        setLoading(false);
        setMessages(prevMessages => prevMessages.slice(0, -1));
        setMessages(prevMessages => [...prevMessages, { text: response, sender: 'ai' }]);
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="mainBoxHome">
            <div className='Conversation'>
                {messages.map((msg, index) => (
                    <div key={index} className={msg.sender === 'user' ? 'rightMsg' : 'leftMsg'}>
                        {msg.sender === 'user' ? 
                            <MessageBox message={msg.text} /> : 
                            <MessageBoxAi message={msg.text} />
                        }
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <DialogBox onSendMessage={handleNewMessage} />
        </div>
    );
}
