import {
  Chat,
  Heart,
  Pencil,
  PencilSimple,
  UserCircle,
} from "phosphor-react-native";
import React, { useContext, useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Context as PostContext } from "../../context/PostContext";
import { Context as AuthContext } from "../../context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { FocusAwareStatusBar } from "../../components/FocusAwareStatusBar";
import { THEME } from "../../Theme";
import { PostItem } from "../../components/PostItem";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import api from "../../services/api";
import { Post } from "../../@types/post";
import { getAuthHeader } from "../../services/auth";
import { likePost, unlikePost } from "../../services/posts";
import * as SecureStore from "expo-secure-store"

interface HomeProps {
  navigation: NativeStackNavigationProp<any, any>;
  
}

export function Home({ navigation }: HomeProps) {
  const { user } = useContext(AuthContext);
  //const { getPosts, posts } = useContext(PostContext);
  const [posts, setPosts] = useState<Post[]> ([]);
  
  useEffect(() => {
    async function getPosts(){
      const authHeader = await getAuthHeader();
      const response = await api.get("/feed", authHeader);
      setPosts(response.data.reverse())
    }
    getPosts()
  }, []);

  function handlePencilClick() {
    navigation.navigate("CreatePost");
  }

  async function handleLike(postId: String) {
    const profile =  await SecureStore.getItemAsync("profile") as string;
    const [post, ...rest] =  posts.filter(post => post._id === postId)
    try {
     if (post && !post.likes.includes(profile)){
      console.log(profile)
       const newPost = await likePost(post, profile);
       changePostItem(newPost);
     
     }else {
      console.log("yaaaaa");
       const newPost = await unlikePost(post, profile);
       changePostItem(newPost)
     }
    } catch (error) {
      console.error(error);
    }
 }
 function changePostItem(newPost : Post){
  setPosts((posts) =>{
    const post = newPost
    const index = posts.indexOf(post);
    posts[index] = post;
    return [...posts];
  });
}

  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={THEME.COLORS.BACKGROUND_800}
      />
      <View style={styles.heading}>
        <UserCircle color="white" size={48} weight="thin" />
        <Text style={styles.usernameText}>{user}</Text>
        <View style={{ flex: 1 }}></View>
        <TouchableOpacity onPress={handlePencilClick}>
          <PencilSimple color="white" size={40} weight="thin" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <FlatList
          data={posts}
          keyExtractor={({ _id }) => _id}
          renderItem={({ item }) => <PostItem post={item}  handleLike ={handleLike} />}
        />
      </View>
    </SafeAreaView>
  );
}
