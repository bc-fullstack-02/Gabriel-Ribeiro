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
import logo from '../../../assets/images/logo.png'
import { Auth } from "../../@types/auth";


interface AuthFormProps {
    formTitle: string;
    submitFormButtonText: string;
    submitFormButtonAction : (auth: Auth) => void;
    showNameInput ?: string;
}
export function AuthForm({formTitle, submitFormButtonText, submitFormButtonAction} : AuthFormProps) {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      contentContainerStyle={styles.containerPosition}
      behavior={Platform.OS === "ios" ? "padding" : "position"}
    >
      <Image
        source={logo}
        style={logo}
        resizeMethod="auto"
      />
      <Heading title="Parrot" subtitle={formTitle} />
      <Input.Root>
        <Input.Icon>
          <User color={THEME.COLORS.CAPTION_400} />
        </Input.Icon>
        <Input.Input
          value={username}
          onChangeText={setUser}
          placeholder="Digite o seu usuário.."
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
          placeholderTextColor={THEME.COLORS.INPUT}
          autoCapitalize="none"
          autoCorrect
          secureTextEntry
        />
      </Input.Root>
      <Spacer />
      <Button title={submitFormButtonText} onPress={() => submitFormButtonAction({username,password})} />
    </KeyboardAvoidingView>
  );
}

//export { Auth };
