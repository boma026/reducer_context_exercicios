"use client"
import { usePosts } from "@/contexts/listPostContext"
import { useState } from "react"

export const Header = () => {
    
    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");

    //Usando hooks personalizados
    const listPostCtx = usePosts()

    //SE PASSADO O SETLISTPOST DA PRA FAZER DA FORMA ABAIXO

    /*const AddNewItemCtx = (title: string, body: string) => {
        if (title.trim() === "" || body.trim() === "") return;

        listPostCtx?.setListPosts([...listPostCtx.listPosts, {
            id: listPostCtx.listPosts.length,
            title,
            body
        }])
        setTitle(""),
        setBody("")
    }*/

    //Caso passassemos a funçao  pra remover, ficaria dessa forma
    /*const handleAddButton = (title: string, body: string) => {
        if (title.trim() === "" || body.trim() === "") return;
        listPostCtx?.addPost(title, body);
        setTitle(""),
        setBody("")
    }  */

    const handleAddButton = (title: string, body: string) => {
        if(title.trim() === "" || body.trim() === "") return;
        listPostCtx?.dispatch({
            type:"add",
            payload: { title, body }
        })
        setTitle("");
        setBody("");
    }

    return (
        <header>
            <h1 className="text-3xl">Cadastre seus posts abaixo:</h1>
            <div className="flex flex-col max-w-xl my-4 border border-dotted border-gray-400 p-3">
                <input
                    className="rounded-md border border-white text-white text-xl p-3 bg-blue-900"
                    placeholder="Título"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>

                <input
                    className="rounded-md border border-white text-white text-xl p-3 bg-blue-900"
                    placeholder="Corpo"
                    type="text"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}/>    
                    
                <button
                    className="bg-blue-500 p-3 text-white rounded-md cursor-pointer"
                    onClick={() => handleAddButton(title, body)}>
                        Adcionar post
                </button>
            </div>  
        </header>
    )
}