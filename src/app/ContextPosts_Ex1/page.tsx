"use client"

import { Header } from "@/components/Header";
import { listPostContext, ListPostProvider } from "@/contexts/listPostContext";
import { Footer } from "@/components/Footer";
import { useContext } from "react";
import { PostList } from "@/components/PostList";

export default function Ex1 () {

    const listPostCtx = useContext(listPostContext);

    return (
        <div className="container mx-auto">
            <ListPostProvider>
                <Header />
                    <PostList/>
                <Footer />
            </ListPostProvider>
        </div>
    )
}