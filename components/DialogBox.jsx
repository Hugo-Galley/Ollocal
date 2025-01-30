'use client'
import "@/app/styles/DialogBox.css"
import { useState } from "react";

export default function DialogBoxAi({ onSendMessage }){
    const [message, setMessage] = useState("");

    function SendMessage(){
        if (message.trim()){
            onSendMessage(message); 
            setMessage("");
        }
    }

    function SendWithEnter(e){
        if (e.key === "Enter" && !e.shifhtKey){
            e.preventDefault(),
            SendMessage();
        }
    }

    return(
        <div>
            <div className="box">
                <textarea
                    name="textZone"
                    id="text-zone"
                    placeholder="Message a Ollocal"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={SendWithEnter}
                    
                />
                <button className="sendButton" onClick={SendMessage}> {/* Enlever l'arrow function */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}