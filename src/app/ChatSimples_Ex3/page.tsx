"use client"
import { Chat } from "@/components/Chat";
import { ChatHeader } from "@/components/ChatHeader";
import { SimpleChat } from "@/components/SimpleChat";
import { ChatUserProvider } from "@/contexts/chatUserContext";
import { Welcome } from "@/contexts/Welcome";
import { useState } from "react"

export default function Ex3 () {

    return (
        <ChatUserProvider>
            <SimpleChat/>
        </ChatUserProvider>
    )
}