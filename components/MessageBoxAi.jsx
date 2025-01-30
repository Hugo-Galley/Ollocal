import '@/app/styles/MessageBox.css'
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function MessageBoxAi({message}){
    
    return(
        <div className="divMessage aiMessage">
            <ReactMarkdown
                className="textMessage"
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                            <SyntaxHighlighter
                                style={vscDarkPlus}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            >
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    }
                }}
            >{message}</ReactMarkdown>
        </div>
    )
}