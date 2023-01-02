import { Chat, Heart, UserCircle } from 'phosphor-react-native'
import React, { useContext } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import {Post} from '../../@types/post'
import { Spacer } from '../Spacer'
import { Context as AuthContext } from "../../context/AuthContext";
import { myIP } from '../../services/api'

interface PostItemProps {
    post: Post;
    handleLike: (postId: string) => void
}
export function PostItem({post, handleLike}: PostItemProps) {
    const {profile} = useContext(AuthContext);

  return (
    <View style = {styles.container}>
    <View style ={styles.heading}>
      <UserCircle color="white" size={48} weight ="thin"/>
      <Text style ={styles.postUserText}>{post.profile}</Text>
    </View>
    <Spacer/>
    <Text style={styles.postUserText}>{post.title}</Text>
    {post.description && <Text style={styles.postDescriptionText}>{post.description}</Text>}
    <Spacer/>
    {post.image ? (
        <Image source={{uri:`http://${myIP}:9000/${post.image}`}} style ={styles.image}></Image>
    ) : (
        <View style={styles.contentBody} >
            <Text style={styles.contentText}> {post.description} </Text> 
        </View>
    )}
  
      <View style={styles.footer}>
        <Chat size={24} color="white" weight="thin"/>
        <Text style={styles.number}>{post.comments.length}</Text>
        <TouchableOpacity onPress={() => handleLike(post._id)}>
            {post.likes.includes(profile as string) ? (
                 <Heart size={24} color="red" weight="fill"/>
            ) : (
                <Heart size={24} color="white" weight="thin"/>
            )}
        </TouchableOpacity>
        <Text style={styles.number}>{post.likes.length}</Text>
      </View>
      <Spacer/>
    </View>
  )
}
