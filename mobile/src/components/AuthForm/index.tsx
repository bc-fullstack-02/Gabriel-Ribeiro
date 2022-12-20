import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import React, { Component, ReactNode, useState } from "react";
import { styles } from "./styles";
import { Heading } from "../Heading";
import { Input } from "../Input";
import { Spacer } from "../Spacer";
import { User, Lock } from "phosphor-react-native";
import { THEME } from "../../Theme";
import { Button } from "../Button";


export interface Auth {
    user: string;
    name ?: string;
    password: string;
}
interface AuthFormProps {
    formTitle: string;
    submitFormButtonText: string;
    submitFormButtonAction : (auth: Auth) => void;
    linkDescription: string;
    routeName: string;
    showNameInput ?: string;
}
export function AuthForm({formTitle, submitFormButtonText, submitFormButtonAction, linkDescription} : AuthFormProps) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      contentContainerStyle={styles.containerPosition}
      behavior={Platform.OS === "ios" ? "padding" : "position"}
    >
      <Image
        source={require("../../../assets/images/logo.png")}
        style={require("../../../assets/images/logo.png")}
        resizeMethod="scale"
      />
      <Heading title="Sysmap Parrot" subtitle={formTitle} />
      <Input.Root>
        <Input.Icon>
          <User color={THEME.COLORS.CAPTION_400} />
        </Input.Icon>
        <Input.Input
          value={user}
          onChangeText={setUser}
          placeholder="Digite o seu usuário"
          autoCapitalize="none"
          autoCorrect
        />
      </Input.Root>
      <Spacer />
      <Input.Root>
        <Input.Icon>
          <Lock color={THEME.COLORS.CAPTION_400} />
        </Input.Icon>
        <Input.Input
          value={password}
          onChangeText={setPassword}
          placeholder="Digite a sua senha"
          autoCapitalize="none"
          autoCorrect
          secureTextEntry
        />
      </Input.Root>
      <Spacer />
      <Button title={submitFormButtonText} onPress={() => submitFormButtonAction({user,password})} />
      <Spacer />
      <Text style={styles.link}>{linkDescription}</Text>
    </KeyboardAvoidingView>
  );
}
