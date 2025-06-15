"use client"

import { title } from "process";
import { createContext, ReactNode, useState } from "react";

type listPostContextType = {
    listPosts: Post[],
    setListPosts: (postList: Post[]) => void, //passando essa funçao o provider sera capaz de alterar o valor do state
    addPost: (title: string, body: string) => void; // passando essa função ele é capaz de usar a funçao para adcionar o state
}

export const listPostContext = createContext<null | listPostContextType>(null)

type listPostProvider ={
    children: ReactNode
}

export const ListPostProvider = ({children}: listPostProvider) => {
    const [listPosts, setListPosts] = useState<Post[]>([])

    const addPost = (title: string, body: string) => {
        setListPosts([...listPosts, {
            id:listPosts.length, title, body
        }])
    }

    return (
        <listPostContext.Provider value={{listPosts, setListPosts, addPost}}>
            {children}
        </listPostContext.Provider>
    )
}