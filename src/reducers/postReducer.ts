"use client"

type AddPost = {
    type: "add",
    payload: {
        title: string,
        body: string
    }
}

type RemovePost = {
    type: "remove",
    payload: number
}

//Tipo feito pra carregar os Posts
type LoadPosts = {
    type: "load"
    payload: Post[];
}

export type PostActions = AddPost | RemovePost | LoadPosts;

export const postReducer = (postList: Post[], action:PostActions) => {
    switch(action.type){
        case"add":
            return [...postList, {
                id: postList.length,
                title: action.payload.title,
                body: action.payload.body
            }]

        case "remove":
            return postList.filter((post) => post.id !== action.payload);    
        
        case "load":
            return action.payload; //Carrega o postList com o que vier do payload

        default:
            return postList;    
    }
} 