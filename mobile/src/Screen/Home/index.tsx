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

interface HomeProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export function Home({ navigation }) {
  const { user } = useContext(AuthContext);
  const { getPosts, posts } = useContext(PostContext);

  useEffect(() => {
    getPosts && getPosts();
  }, []);

  function handlePencilClick() {
    navigation.navigate("CreatePost");
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
          renderItem={({ item }) => <PostItem post={item} />}
        />
      </View>
    </SafeAreaView>
  );
}
