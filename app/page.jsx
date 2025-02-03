'use client';
import DialogBox from "@/components/DialogBox";
import MessageBox from "@/components/MessageBox";
import { useState } from "react";
import '@/app/styles/Home.css'
import MessageBoxAi from "@/components/MessageBoxAi";

export default function Home() {
    const [messageSubmit, setMessageSubmit] = useState([]);
    function RecupMessageFromUser(message){
        setMessageSubmit((ancienMessage) => [...ancienMessage, message]);
    }
    return (
        <div className="HomeContainer">
            {messageSubmit.length === 0 ? (
                <div className="HomeFirst">
                    <h2 className="title">Bienvenue sur Ollocal</h2>
                    <div className="DialogBox">
                        <DialogBox onTextSubmit={RecupMessageFromUser} />
                    </div>
                </div>
                
            ) : (
                <>
                    <div className="Conversation">
                        {messageSubmit.map((msgValue, index) => (
                            <div key={index} className="Conversation2Msg">
                                <div className="rightMsg">
                                    <MessageBox message={msgValue} />
                                </div>
                                <div className="leftMsg">
                                    <MessageBoxAi message={msgValue} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="DialogBox">
                        <DialogBox onTextSubmit={RecupMessageFromUser} />
                    </div>
                </>
            )}
        </div>
    );
    
}
