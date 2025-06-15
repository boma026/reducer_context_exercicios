import { listPostContext } from "@/contexts/listPostContext"
import { useContext } from "react"

export const Footer = () => {
    
    const listPostCtx = useContext(listPostContext);

    return (
        <footer>
            Total de posts: {listPostCtx?.listPosts.length}
        </footer>
    )
}