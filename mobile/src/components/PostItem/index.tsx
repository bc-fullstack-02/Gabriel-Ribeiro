import { Chat, Heart, UserCircle } from 'phosphor-react-native'
import React, { useContext } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import {Post} from '../../@types/post'
import { Spacer } from '../Spacer'
import { Context as PostContext } from "../../context/PostContext";
import { Context as AuthContext } from "../../context/AuthContext";

interface PostItemProps {
    post: Post
}
export function PostItem({post}: PostItemProps) {
    const {likePost, unlikePost} = useContext(PostContext)
    const {profile} = useContext(AuthContext);

    function handleLikePress(){
        if(post.likes.includes(profile)){
            unlikePost && unlikePost({postId: post._id});
        }else{
            likePost && likePost({postId : post._id})
        }
    }

  return (
    <View style = {styles.container}>
    <View style ={styles.heading}>
      <UserCircle color="white" size={48} weight ="thin"/>
      <Text style ={styles.postUserText}>{post.profile}</Text>
    </View>
    <Spacer/>
    {post.image ? (
        <Image source={{uri:"http://shorturl.at/gioT4"}} style ={styles.image}></Image>
    ) : (
        <View style={styles.contentBody} >
            <Text style={styles.contentText}> {post.description} </Text> 
        </View>
    )}
  
      <View style={styles.footer}>
        <Chat size={24} color="white" weight="thin"/>
        <Text style={styles.number}>{post.comments.length}</Text>
        <TouchableOpacity onPress={handleLikePress}>
            {post.likes.includes(profile) ? (
                 <Heart size={24} color="red" weight="fill"/>
            ) : (
                <Heart size={24} color="white" weight="thin"/>
            )}
        </TouchableOpacity>
        <Text style={styles.number}>{post.likes.length}</Text>
      </View>
    </View>
  )
}
