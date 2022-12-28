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
  import { User, Lock, Envelope } from "phosphor-react-native";
  import { THEME } from "../../Theme";
  import { Button } from "../Button";
  import logo from '../../../assets/images/logo.png'
  import { Auth, RegisterAuth } from "../../@types/auth";
  
  
  interface RegisterFormProps {
      formTitle: string;
      submitFormButtonText: string;
      submitFormButtonAction : (auth: RegisterAuth) => void;
      showNameInput ?: string;
  }
  export function RegisterForm({formTitle, submitFormButtonText, submitFormButtonAction} : RegisterFormProps) {
    const [username, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
  
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
        <Heading title="Sysmap Parrot" subtitle={formTitle} />
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

        <Input.Root>
          <Input.Icon>
            <Envelope color={THEME.COLORS.CAPTION_400} />
          </Input.Icon>
          <Input.Input
            value={email}
            onChangeText={setEmail}
            placeholder="Digite o seu email"
            placeholderTextColor={THEME.COLORS.INPUT}
            autoCapitalize="none"
            autoCorrect
            
          />
        </Input.Root>
        <Spacer />
        
        <Button title={submitFormButtonText} onPress={() => submitFormButtonAction({username,password,email})} />
      </KeyboardAvoidingView>
    );
  }
  
  //export { Auth };
  