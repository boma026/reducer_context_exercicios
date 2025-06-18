"use client"
import { usePosts } from "@/contexts/listPostContext"


export const Footer = () => {
    
    const listPostCtx = usePosts();

    return (
        <footer>
            Total de posts: {listPostCtx?.listPosts.length}
        </footer>
    )
}