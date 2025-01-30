import '@/app/styles/MessageBox.css'

export default function MessageBox({message}){
    
    return(
        <div className="divMessage">
            <p className="textMessage">{message}</p>
        </div>
    )
}