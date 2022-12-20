import React, { useState } from "react";
import api from "../../services/api";
import { Auth, AuthForm } from "../../components/AuthForm";

export function Login() {
  async function handleLogin(auth: Auth) {
    try {
      const response = await api.post("/security/login", auth);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <AuthForm
      formTitle="Faça o login e comece a usar!"
      submitFormButtonText="Entrar"
      submitFormButtonAction={handleLogin}
      linkDescription="Não possui conta? Crie uma agora!"
      routeName=""
    />
  );
}
