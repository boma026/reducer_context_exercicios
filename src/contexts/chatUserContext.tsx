import { createContext, ReactNode, useContext, useState } from "react";

type ChatUserType = {
    name: string,
    setName: (name : string) => void
}

export const chatUser = createContext<ChatUserType | null>(null);

type Props = {
    children: ReactNode;
}

export const ChatUserProvider = ({children}: Props) => {
    const [name, setName] = useState("");

    return (
        <chatUser.Provider value={{name, setName}}>
            {children}
        </chatUser.Provider>
    )
}

export const useChatUser = () => {
    const context = useContext(chatUser);
    if (!context) {
        throw new Error("useChatUser must be used within a ChatUserProvider");
    }
    return context;
};