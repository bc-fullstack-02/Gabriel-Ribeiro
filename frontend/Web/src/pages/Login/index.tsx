import AuthForm from "../../components/AuthForm";
import jwt_decode from "jwt-decode";
import api from "../../services/api";

interface UserToken {
  profile : string;
  user: string;
}

function Login() {
  async function handlelogin(user: string, password: string) {
    const data = await api.post("/security/login", {
      user,
      password,
    });
   // console.log(jwt_decode(data.accessToken)) as UserToken;
  }

  return (
    <AuthForm
      formTitle="Faça o login e comece a usar!"
      submitFormButtonText="Entrar"
      submitFormButtonAction={handlelogin}
      linkDescription="Não possui conta? Crie uma agora!"
      routeName="/signup"
    />
  );
}

export default Login;
