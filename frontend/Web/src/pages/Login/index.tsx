import AuthForm , {Auth}from "../../components/AuthForm";
import jwt_decode from "jwt-decode";
import api from "../../services/api";
import { useNavigate } from 'react-router-dom'

interface UserToken {
  profile : string;
  user: string;
}

function Login() {
  const navigate = useNavigate()
  
  async function handlelogin(auth : Auth) {
    try {
      const { data } = await api.post("/security/login", auth);
      const { token } = data;

      
      localStorage.setItem("accessToken", token);
      // console.log(jwt_decode(data.accessToken)) as UserToken;

      console.log(window.localStorage);
      return navigate("/home");

    } catch (error) {
      console.error(error)      
      alert("Ocorreu algum erro n o login")
    }
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
