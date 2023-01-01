import { Post } from "../@types/post";
import api from "./api";
import { getAuthHeader } from "./auth";
import * as SecureStore from "expo-secure-store"

 async function likePost(post: Post, profile : string) : Promise<Post> {
    const profileLocalStorage =  await SecureStore.getItemAsync("profile");
    const authHeader = await getAuthHeader();
     await api.post(`/posts/${post._id}/like`, { userId: profileLocalStorage }, authHeader);
     return like(post,profile)
 }

 async function unlikePost(post: Post, profile : string):  Promise<Post> {
    const profileLocalStorage =  await SecureStore.getItemAsync("profile");
    const authHeader = await getAuthHeader();
     await api.post(`/posts/${post._id}/like`, { userId: profileLocalStorage }, authHeader);
     return unlike(post, profile)
 } 

 function like (post : Post, profile : string){
    post.likes.push(profile);
    return post;
 }

 function unlike (post : Post, profile : string){
    const index = post.likes.indexOf(profile);
    post.likes.splice(index, 1);
    return post;
 }
export {likePost , unlikePost, like, unlike}