import { useChatUser } from "@/contexts/chatUserContext"
import { chatReducer } from "@/reducers/chatReducer";
import { FormEvent, useReducer, useState } from "react";

export const Chat = () => {
    
    const {name} = useChatUser();
    const [userInput, setUserInput] = useState("");
    const [botInput, setBotInput] = useState("");
    const [chatList, dispatch] = useReducer(chatReducer, []);

    const handleOnSubmitUser = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({
            type:"add",
            payload:{ message:userInput, user:true, name}
        })
        setUserInput("");
    }

    const handleOnSubmitBot = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
         dispatch({
            type:"add",
            payload:{ message:botInput, user:false, name:"Vitao"}
        })
        setBotInput("");
    }

    return (
        <div className="border-2 w-full max-w-sm aspect-[3/5]">
            <div className="flex h-full flex-col justify-end ">
                <div className="flex-1 overflow-y-auto">
                    {chatList.map((message, index) => 
                        <div className={`flex flex-col ${message.user? `items-end` : `items-start`}`} key={index}>
                            <div className="inline-block mr-2 mt-2 p-2 rounded-md border border-gray-600/30 bg-gray-900">
                                <div className="font-bold ">{message.name}</div>
                                <div>{message.message}</div>
                            </div>
                        </div>)}
                </div>
                <form onSubmit={handleOnSubmitUser}>
                    <input
                        className="border-t-2 w-full border-gray-100"
                        type="text"
                        placeholder={`${name}, digite uma mensagem e aperte enter`}
                        value={userInput}
                        onChange={e => setUserInput(e.target.value)}
                        />
                    <button type="submit" className="hidden">enviar</button>
                </form>
                <form onSubmit={handleOnSubmitBot}>
                    <input
                        className="border-t-2 w-full border-gray-100"
                        type="text"
                        placeholder={`Vitao, digite uma mensagem e aperte enter`}
                        value={botInput}
                        onChange={e => setBotInput(e.target.value)}
                        />
                    <button type="submit" className="hidden">enviar</button>
                </form>
            </div>
        </div>
    )
}