import React, { useContext, useState } from "react";
import api from "../../services/api";
import {  AuthForm } from "../../components/AuthForm";
import { Text, TouchableOpacity } from "react-native";
import type {NativeStackNavigationProp} from '@react-navigation/native-stack'
import { styles } from "./styles";
import { Provider as AuthProvider, Context as AuthContext } from "../../context/AuthContext"
import { Spacer } from "../../components/Spacer";

interface LoginProps {
  navigation : NativeStackNavigationProp<any,any>;
}

export function Login( {navigation}: LoginProps) {

  const {login, errorMessage} = useContext(AuthContext)
  

  function handleRegisterClick(){
    navigation.navigate("SignUp")
  }
  return (
   <>
    <AuthForm
      formTitle="Faça o login e comece a usar!"
      submitFormButtonText="Entrar"
      submitFormButtonAction={login}
    />

    <TouchableOpacity onPress={handleRegisterClick}>
      <Text style={styles.link}>Não possui conta? Crie uma agora!</Text>
    </TouchableOpacity>

    {errorMessage && (
      <Spacer>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      </Spacer>
    )}
   </>
  );
}
