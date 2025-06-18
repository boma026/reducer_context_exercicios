"use client"
import { PageContent } from "@/components/PageContent"
import { ThemeContextProvider } from "@/contexts/themeContext"

export default function Ex2 () {

    return (
        <ThemeContextProvider>
            <PageContent />
        </ThemeContextProvider>
    )
}