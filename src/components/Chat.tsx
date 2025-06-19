import { useChatUser } from "@/contexts/chatUserContext"
import { History } from "@/types/History";
import { useState } from "react";

export const Chat = () => {
    
    const {name} = useChatUser();
    const [userInput, setUserInput] = useState("");
    const [botInput, setBotInput] = useState("");
    const [chatHistory, setChatHistory] = useState<History[]>([]);

    const handleOnSubmitUser = (e: FormDataEvent) => {
        e.preventDefault();
        setChatHistory([...chatHistory, { message: userInput, user:true }]);
        setUserInput("");
    }

    return (
        <div className="border-2 w-full max-w-sm aspect-[3/5]">
            <div className="flex h-full flex-col justify-end ">
                <div className="flex-1 overflow-y-auto">
                    {chatHistory.map((message, index) => 
                        <div key={index}></div>)}
                </div>
                <form onSubmit={() => handleOnSubmitUser}>
                    <input
                        className="border-t-2 w-full border-gray-100"
                        type="text"
                        placeholder={`${name}, digite uma mensagem e aperte enter`}
                        value={userInput}
                        onChange={e => setUserInput(e.target.value)}
                        />
                    <button type="submit" className="hidden">enviar</button>
                </form>
                <input 
                    className="border-t-2 border-gray-100"
                    type="text"
                    placeholder={`bot, digite uma mensagem e aperte enter`}/>
            </div>
        </div>
    )
}