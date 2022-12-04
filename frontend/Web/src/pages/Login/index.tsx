import Heading from "../../components/Heading";
import {User, Lock } from "phosphor-react";
import Text from "../../components/Text";
import logo from "../../assets/logo.svg"
import { TextInput } from "../../components/TextInput";
import Button from "../../components/Button";

function Login (){
    return(
        <div className="text-cyan-50 flex flex-col items-center mt-4">
            <header className="flex flex-col items-center">
                <img src={logo} alt="logo" />
                <Heading size="lg" className="mt-2">Sysmap Parrot</Heading>
                <Text className="mt-1 opacity-50">Faça o login e comece a usar!</Text>
            </header>
            
            <form className="mt-10 flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
                <label htmlFor="user" className="flex flex-col gap-2">
                    <Text>Login</Text>
                    <TextInput.Root>
                        <TextInput.Icon> <User/></TextInput.Icon>
                        <TextInput.Input id="user" type="text" placeholder="Digite seu login"/>
                    </TextInput.Root>
                </label>

                <label htmlFor="password" className="flex flex-col gap-2">
                    <Text>Senha</Text>
                    <TextInput.Root>
                        <TextInput.Icon><Lock/></TextInput.Icon>
                        <TextInput.Input id="password" type="password" placeholder="*********"/>
                    </TextInput.Root>
                </label>

                <Button type ="submit" className="mt-4">Entrar </Button>
            </form>

            <h1>Footer</h1>

        </div>      
    )
}

export default Login;