"use client"
import { usePosts } from "@/contexts/listPostContext"


export const PostList = () => {
    
    const listPostCtx = usePosts();

    //Caso passassemos a funçao  pra remover, ficaria dessa forma
    /*const handleRemovePost = (postId : number) => {
        listPostCtx?.removePost(postId);
    }*/

     const handleRemovePost = (postId : number) => {
        listPostCtx?.dispatch({
            type:"remove",
            payload:postId
        })
     }


    return (
        <>
            <p>Listagem de Posts:</p>
                {listPostCtx?.listPosts &&
                   <ul>
                    {listPostCtx.listPosts.map((post) =>
                        <li key={post.id} className="p-3 border-b border-gray-500"> 
                            <div className="text-xl font-bold mb-2">id: {post.id}</div>
                            <div className="text-xl font-bold mb-2">title: {post.title}</div>
                            <div className="text-sm"> body: {post.body}</div>
                            <button onClick={() => handleRemovePost(post.id)} className="bg-red-500 cursor-pointer border rounded-md mt-5"> Remover Post </button>
                        </li>)}
                    </ul>}
        </>
    )
}