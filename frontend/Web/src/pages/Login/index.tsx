import Heading from "../../components/Heading";
import Text from "../../components/Text";
import logo from "../../assets/logo.svg"

function Login (){
    return(
        <div className="text-cyan-50 flex flex-col items-center mt-4">
            <header className="flex flex-col items-center">
                <img src={logo} alt="logo" />
                <Heading>Sysmap Parrot</Heading>
                <Heading>Faça o login e comece a usar!</Heading>

            </header>
        
            <h1>Form</h1>
            <h1>Footer</h1>

        </div>      
    )
}

export default Login;