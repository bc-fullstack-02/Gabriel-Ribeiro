import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useContext, useState } from "react";
import { Context as AuthContext } from "../../context/AuthContext";
import { Context as PostContext } from "../../context/PostContext";
import { Spacer } from "../../components/Spacer";
import { Input } from "../../components/Input";
import { THEME } from "../../Theme";
import { Button } from "../../components/Button";
import { UserCircle } from "phosphor-react-native";
import { styles } from "./styles";
import { getAuthHeader } from "../../services/auth";
import api from "../../services/api";
import { navigate } from "../../../RootNavigator";
import * as ImagePicker from 'expo-image-picker';
import * as SecureStore from "expo-secure-store";
import { useForm } from 'react-hook-form'

export function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useContext(AuthContext);
  const [image, setImage] = useState("");

  const createPost = async ()=> {
    const profile =  await SecureStore.getItemAsync("profile") as string;
    const token = await SecureStore.getItemAsync("token") as string;
   
    const dataForm = new FormData();
    
    dataForm.append("title", title);
    dataForm.append("description", description);
    dataForm.append('image', {
      name: 'image',
      type: 'image/jpg',
      uri: image
    });
    dataForm.append("userId", profile);
    try {
      const authHeader = await getAuthHeader();
      const response = await api.post("/posts", dataForm, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });
      
      navigate("Home");
    } catch (error) {
        console.error(error);
    }
}

    const pickImage  = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: false,
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          aspect: [4, 3],
          quality: 1,
      });
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    }
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <UserCircle color="white" size={48} weight="thin" />
        <Text style={styles.usernameText}>{user}</Text>
        <View style={{ flex: 1 }}></View>
      </View>
      <Spacer>
        <Input.Root>
          <Input.Input
            value={title}
            onChangeText={setTitle}
            placeholder="Digite o título do post.."
            placeholderTextColor={THEME.COLORS.INPUT}
            autoCorrect
          />
        </Input.Root>
      <Spacer/>
        <Input.Root>
          <Input.Input
            value={description}
            onChangeText={setDescription}
            placeholder="Digite a descrição do post..."
            placeholderTextColor={THEME.COLORS.INPUT}
            autoCorrect
          />
        </Input.Root>
      <Spacer/>
      <View>
        <Button title="Escolha uma imagem para o post" onPress={pickImage} style={styles.imageButton}/>
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>
      <Button
        title="Postar"
        onPress={createPost}
      />
      </Spacer>
    </View>
  );
}
