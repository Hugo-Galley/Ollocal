import '@/app/styles/MessageBox.css'
import ReactMarkdown from "react-markdown";

export default function MessageBox({message}){
    
    return(
        <div className="divMessage">
            <ReactMarkdown className="textMessage">{message}</ReactMarkdown>
        </div>
    )
}