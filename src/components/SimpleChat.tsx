import { useChatUser } from "@/contexts/chatUserContext";
import { useState } from "react";
import { ChatHeader } from "./ChatHeader";
import { Chat } from "./Chat";

export const SimpleChat = () => {

    const { name, setName } = useChatUser();
    const [showChat, setShowChat] = useState(false);
    
    const handleShowChat = () => {
        setShowChat(true);
    }

    return (
        <>
            {showChat?
                <div className="w-full min-h-screen bg-black text-white flex flex-col items-center">
                    <ChatHeader/>
                        <Chat/>
                </div>
            :(
                    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center">
                        <ChatHeader/>
                        <div>
                            <p>Qual seu nome?</p>
                            <div className="flex flex-row">
                                <input
                                    type="text"
                                    className="border-2 border-gray-400 bg-gray-900 min-w-3xs"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    />
                                <button className="ml-5 border-2 p-2 border-gray-400 bg-gray-900 cursor-pointer" onClick={handleShowChat}>Iniciar chat</button>    
                            </div>
                        </div>
                    
                    </div>
            )}
        </>
    )
}