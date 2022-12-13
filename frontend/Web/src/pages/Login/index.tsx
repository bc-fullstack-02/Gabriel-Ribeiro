import AuthForm , {Auth}from "../../components/AuthForm";
import jwt_decode from "jwt-decode";
import api from "../../services/api";
import { useNavigate } from 'react-router-dom'

interface UserToken {
  profile : string;
  username: string;
}

function Login() {
  const navigate = useNavigate()
  
  async function handlelogin(auth : Auth) {
    try {
      const { data } = await api.post("/security/login", auth);
      const { token } = data;

      const decodedToken = jwt_decode(token) as UserToken      
      localStorage.setItem("profile", decodedToken.profile)
      localStorage.setItem("user", decodedToken.username)
      localStorage.setItem("accessToken", token)

      return navigate("/home");

    } catch (error: any) {
      console.error(error.response.data)     
      alert(error.response.data)
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
