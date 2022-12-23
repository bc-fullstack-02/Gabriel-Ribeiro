import React, { useState } from "react";
import api from "../../services/api";
import { Auth, AuthForm } from "../../components/AuthForm";
import { Text, TouchableOpacity } from "react-native";
import type {NativeStackNavigationProp} from '@react-navigation/native-stack'
import { styles } from "./styles";


interface SignUpProps {
  navigation : NativeStackNavigationProp<any,any>;
}

export function SignUp( {navigation}: any) {
  function handleLoginClick(){
    navigation.navigate("Login")
  }
  console.log(navigation);

  async function handleSignUp(auth: Auth) {
    try {
     await api.post("/security/register", auth);
     navigation.navigate("Login")
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
    <AuthForm
      formTitle="Faça o cadastro e comece a usar!"
      submitFormButtonText="Cadastrar"
      submitFormButtonAction={handleSignUp}
    />
    <TouchableOpacity onPress={handleLoginClick}>
      <Text style={styles.link}>Já possui conta? Clique aqui para fazer o login</Text>
    </TouchableOpacity>
    </>
  );
}
