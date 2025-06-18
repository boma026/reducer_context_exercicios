import { themeContext, useTheme } from "@/contexts/themeContext";
import { useContext } from "react";

export const PageContent = () => {
    
    const themeCtx = useTheme();

    if (!themeCtx) return null;

    const {isBlack , setIsBlack} = themeCtx;

    const handleToggleBg = () => {
        setIsBlack(!isBlack);
    }
    
    return (
        <div className={`w-full min-h-screen ${isBlack ? `bg-black` : `bg-white`}`}>
                <div className="flex flex-row justify-around">
                    <h1 className={`text-4xl mb-24 ${isBlack? `text-white` : `text-black`}`} >Título da página</h1>
                    <button className={`cursor-pointer ${isBlack? `text-white` : `text-black`}`} onClick={handleToggleBg}>Mudar pra {isBlack? "Light" : "black"}</button>
                </div>
                <main className={`text-2xl ${isBlack? `text-white` : `text-black`}`}>conteudo da pagina</main>
                <button className={`rounded border mt-24 h-12 ${isBlack? `text-black bg-white` : `text-white bg-black`}`}>Clique aqui</button>
            </div>
    )
}