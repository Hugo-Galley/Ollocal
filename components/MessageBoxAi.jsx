import '@/app/styles/MessageBox.css'

export default function MessageBoxAi({message}){
    return(
        <div className="messageBoxContainer">
            <p className="textMessage">{message}</p>
        </div>
    )
}