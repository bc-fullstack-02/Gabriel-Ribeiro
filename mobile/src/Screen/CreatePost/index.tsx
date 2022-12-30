import { View, Text } from "react-native";
import React, { useContext, useState } from "react";
import { Context as AuthContext } from "../../context/AuthContext";
import { Context as PostContext } from "../../context/PostContext";
import { Spacer } from "../../components/Spacer";
import { Input } from "../../components/Input";
import { THEME } from "../../Theme";
import { Button } from "../../components/Button";
import { UserCircle } from "phosphor-react-native";
import { styles } from "./styles";

export function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useContext(AuthContext);
  const { createPost } = useContext(PostContext);

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
      <Button
        title="Postar"
        onPress={() => {
          createPost && createPost({ title, description });
        }}
      />
      </Spacer>
    </View>
  );
}
