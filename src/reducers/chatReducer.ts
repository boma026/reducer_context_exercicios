import { History } from "@/types/History"

type addMessage = {
    type: "add"
    payload:{
        message: string,
        name: string,
        user: boolean, }
}

export const chatReducer = (chatHistory: History[], action: addMessage) => {
    switch(action.type){
        case "add":
            return [...chatHistory, {
                name: action.payload.name,
                message: action.payload.message,
                user: action.payload.user
            }]
        default:
            return chatHistory;    
    }
} 