import { listPostContext } from "@/contexts/listPostContext"
import { useContext } from "react"

export const PostList = () => {
    
    const listPostCtx = useContext(listPostContext);
    
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
                        </li>)}
                    </ul>}
        </>
    )
}