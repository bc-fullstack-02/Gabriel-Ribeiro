import { Chat, Heart, UserCircle } from "phosphor-react-native";
import React, { useContext, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import { Context as AuthContext } from "../../context/AuthContext";

export function Home( ) {
  const {user} = useContext(AuthContext);

  return (
   <View style = {styles.container}>
    <View style ={styles.heading}>
      <UserCircle color="white" size={48} weight ="thin"/>
      <Text style ={styles.usernameText}>{user}</Text>
    </View>
    <View style={styles.content}>
      <View style={styles.post}>
      <View style={styles.postHeading}>
        <UserCircle color="white" size={48} weight="thin" />
        <Text style={styles.postUserText}>Fulano</Text>
      </View>
      <View style={styles.contentBody}>
        <Text style={styles.contentText}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, unde explicabo dolorum quos voluptatum excepturi tempore, recusandae cupiditate nostrum officia minus voluptate earum iste. Voluptas, itaque possimus. Modi consequuntur repellendus dolorum facere, harum, facilis autem dolor dolore asperiores veritatis excepturi!
        </Text>
      </View>
      <View style={styles.footer}>
        <Chat size={24} color="white" weight="thin"/>
        <Text style={styles.number}>9.999</Text>
        <Heart size={24} color="white" weight="thin"/>
        <Text style={styles.number}>9.999</Text>
      </View>
    </View>
   </View>
   </View>
  );
}
