import React, { useContext, useState } from "react";
import api from "../../services/api";
import {  AuthForm } from "../../components/AuthForm";
import { Text, TouchableOpacity } from "react-native";
import type {NativeStackNavigationProp} from '@react-navigation/native-stack'
import { styles } from "./styles";
import { Auth } from "../../@types/auth";
import { RegisterForm } from "../../components/RegisterForm";

interface SignUpProps {
  navigation : NativeStackNavigationProp<any,any>;
}

export function SignUp( {navigation}: SignUpProps) {
  function handleLoginClick(){
    navigation.navigate("Login")
  }
  console.log(navigation);

  async function handleSignUp(auth: Auth) {
    try {
    const res =  await api.post("/security/register", auth);
     navigation.navigate("Login")
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
    <RegisterForm
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
