import AuthForm from "../../components/AuthForm";

function SignUp() {
    function handleRegister( user: string , password: string) {}
  return (
    <AuthForm
      formTitle="Faça o cadastro e comece a usar!"
      submitFormButtonText="Cadastrar"
      submitFormButtonAction= {handleRegister}
      linkDescription="Já possui conta? Entre uma agora!"
      routeName="/"
    />
  );
}

export default SignUp;
