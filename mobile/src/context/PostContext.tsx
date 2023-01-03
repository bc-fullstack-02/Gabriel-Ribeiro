import React, { ReactNode, useReducer } from "react";
import { Action } from "../@types/reducer";
import api from "../services/api";
import { getAuthHeader } from "../services/auth";
import * as SecureStore from "expo-secure-store"
import { navigate } from "../../RootNavigator";


const defaultValue = {posts: [], errorMessage : null};
const Context = React.createContext(defaultValue);

const Provider = ({children} : {children: ReactNode}) =>{
    const reducer = (state: any, action : Action) =>{
        switch (action.type) {
            case "create_post":
                return {...state, posts : [action.payload, ...state.posts]};
            case "show_posts":
                 return {...state, posts : action.payload }
            case "like_post":
                const newPostsLike = state.posts;
                const [postlike , ..._] = newPostsLike.filter(
                    (post: { _id: any; }) => post._id == action.payload.id
                )
                postlike.likes.push(action.payload.id);
                return {...state, posts: [...newPostsLike]}
            case "unlike_post":
                const newPostsUnlike = state.posts;
                const [postUnlike, ...rest] = newPostsUnlike.filter(
                    (post: { _id: any; }) => post._id == action.payload.id
                )
                const index = postUnlike.likes.indexOf(action.payload.profile)
                postUnlike.likes.splice(index, 1);
                return {...state, posts: [...newPostsUnlike]};
        }
    }

    const [state, dispatch] = useReducer(reducer, defaultValue);

    const getPosts = async ()=>{
        try {
            const authHeader = await getAuthHeader();
            const response = await api.get("/feed", authHeader);
            console.log(response.data)
            dispatch({type: "show_posts", payload: response.data});
        } catch (error) {
            console.error(error);
        }
    }

    const likePost = async ({postId} : {postId: any})=>{
        try {
            const authHeader = await getAuthHeader();
            await api.post(`/posts/${postId}/like`,null , authHeader)
            const profile = await SecureStore.getItemAsync("profile");
            dispatch({type: "like_post", payload: {id: postId, profile: profile}});

        } catch (error) {
            console.error(error);
        }
    }

    const unlikePost= async ({postId} : {postId: any})=>{
        try {
            const authHeader = await getAuthHeader();
            await api.post(`/posts/${postId}/like`,null , authHeader)
            const profile = await SecureStore.getItemAsync("profile");
            dispatch({type: "like_post", payload: {id: postId, profile: profile}});
        } catch (error) {
            console.error(error);
        }
    }

    const createPost = async ({title, description} : {title: any , description : any})=>{
        try {
            const authHeader = await getAuthHeader();
            const response = await api.post("/posts", {title,description}, authHeader)
            console.log(response)
            dispatch({type: "create_post", payload: response.data})
            navigate("Home")
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Context.Provider value={{...state, getPosts, createPost, likePost, unlikePost}}>
            {children}
        </Context.Provider>
    )
}

export{Provider, Context}