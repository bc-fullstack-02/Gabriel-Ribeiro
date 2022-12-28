import { ReactNode, useReducer } from "react";
import { Action } from "../@types/reducer";
import api from "../services/api";
import { Context } from "./AuthContext";

const defaultValue = {posts: [], errorMessage : null};

const Provider = ({children} : {children: ReactNode}) =>{
    const reducer = (state: any, action : Action) =>{
        switch (action.type) {
            case "create_post":
                return {...state}
            case "show_posts":
                 return {...state}
            case "like_post":
                return {...state}
            case "unlike_post":
                return {...state}
        }
    }

    const [state, dispatch] = useReducer(reducer, defaultValue);

    const getPost = async ()=>{
        try {
            const response = await api.get("/posts")
        } catch (error) {
            console.error(error);
        }
    }

    const likePost = async ({postId})=>{
        try {
            
        } catch (error) {
            console.error(error);
        }
    }

    const unlikePost= async ({postId})=>{
        try {
            
        } catch (error) {
            console.error(error);
        }
    }

    const createPost = async ({title, description})=>{
        try {
            
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Context.Provider value={{...state, getPost, createPost, likePost, unlikePost}}>
            {children}
        </Context.Provider>
    )
}