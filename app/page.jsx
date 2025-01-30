'use client';
import '@/app/styles/Home.css';
import DialogBox from "@/components/DialogBox";
import MessageBox from '@/components/MessageBox';
import MessageBoxAi from '@/components/MessageBoxAi';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null);

    const handleNewMessage = (message) => {
        // Ajouter le message de l'utilisateur
        setMessages(prevMessages => [...prevMessages, { text: message, sender: 'user' }]);
        
        // Simuler une réponse IA après un délai
        setTimeout(() => {
            askToAI(message);
        }, 1000);
    };

    const askToAI = (message) => {
        setMessages(prevMessages => [...prevMessages, { text: `Réponse IA à: ${message}`, sender: 'ai' }]);
    };

    // Scroll vers le bas à chaque message ajouté
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
