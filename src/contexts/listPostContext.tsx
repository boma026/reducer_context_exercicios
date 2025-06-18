"use client"

import { PostActions, postReducer } from "@/reducers/postReducer";
import { createContext, Dispatch, ReactNode, useContext, useEffect, useReducer, useState } from "react";

const STORAGE_KEY = "postStorageContent"; //nome dado ao post armazenado no localstorage

type listPostContextType = {
    listPosts: Post[],
    dispatch: Dispatch <PostActions>;
    //setListPosts: (postList: Post[]) => void, passando essa funçao o provider seria capaz de alterar o valor do state,
    // addPost: (title: string, body: string) => void,  passando essa função ele é capaz de usar a funçao para adcionar o post a lista
    // removePost: (id: number) => void  passando essa função ela seria capaz de usar a funçao pra remover o post da lista
}

export const listPostContext = createContext<null | listPostContextType>(null);

type listPostProvider ={
    children: ReactNode
}

export const ListPostProvider = ({children}: listPostProvider) => {
    //Isso seria feito se fossemos usar um useState
    //const [listPosts, setListPosts] = useState<Post[]>([])

    

   //Caso passasemos a funçao addPost com um useState ficaria dessa forma
   /* const addPost = (title: string, body: string) => {
        setListPosts([...listPosts, {
            id:listPosts.length, title, body
        }])
    }*/


    //Caso fossemos fazer  as funções para fazer os dispatchs dentro do contexto ficaria assim
    /*
    const addPost = (title: string, body: string) => {
        dispatch({
            type:"add",
            payload:{ title, body }
        })
    }
    
    const removePost = (id: number) => {
        dispatch({
            type:"remove",
            payload: id
        })
    }
    */


    const [listPosts, dispatch] = useReducer(postReducer, []);  // Init: função que define o estado inicial baseado no localStorage (chamada só uma vez no carregamento do componente).
    
     // flag para indicar que já rodou no client e "se já terminamos de carregar os dados do localStorage?"
     //É preciso primeiro rodar o getItem pois quando a pagina carrega ele tem que primeiro ler o que tem no localStorage e depois prenche-los
    const [isReady, setIsReady] = useState(false);

  // Ao montar no client, carrega do localStorage e atualiza o estado
  useEffect(() => {
    // Pega o item salvo no localStorage usando a chave STORAGE_KEY.
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        try {
        // Se encontrou dados no localStorage, converte de string JSON para array de posts.
        const posts = JSON.parse(stored);
        // Enviamos uma ação do tipo "load" para o reducer, passando os posts recuperados como payload.
        // Isso faz o reducer atualizar o estado 'listPosts' com o conteúdo carregado.
        dispatch({ type: "load", payload: posts });
      } catch(e) {
        console.error(e)
      }
    }
    // Sinaliza que o carregamento inicial está pronto, para liberar o salvamento posterior no localStorage.
    setIsReady(true);
  }, []);

  
    //Para a informaçao (listas de post) persistir na aplicação mesmo depois de atualizar a a página precisamos usar o local storage pra salvar a informação
    //Pra isso, utilizaremos useEffect pra realizar uma ação em um item baseado em algo que aconteceu no react.
    // Esse useEffect roda toda vez que 'listPosts' ou 'isReady' mudam.
    useEffect(() => {
    // Quando listPosts muda, salva no localStorage — só se já estivermos "prontos"
    if (isReady) {
    // recebe 2 argumentos, o primeiro é o nome dado ao que se quer gravar, e o segundo é a coisa gravada
      localStorage.setItem(STORAGE_KEY, JSON.stringify(listPosts)); // A intençao seria passar o listPosts, mas o localstorage so aceita em string, entao teremos que usar o stringfy (que transforma um array em)
    }
  }, [listPosts, isReady]); // Dispara quando a lista muda (adicionar/remover post) ou quando o flag isReady muda.

    return (
        <listPostContext.Provider value={{listPosts, dispatch}}>
            {children}
        </listPostContext.Provider>
    )
}

//Criando hook personalizado (opcional) para usar nas paginas que irao utilizar o context
export const usePosts = () => useContext(listPostContext);