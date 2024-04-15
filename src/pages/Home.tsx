import { Box, Center, Input } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import DButton from "../components/DButton";
import { login } from "../services/login";
import { changeLocalStorage } from "../services/storage";


const Home = () => {

    const { setIsLoggedIn, isLoggedIn, user, setUser } = useContext(AppContext)
    const navigate = useNavigate()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    console.log("AppContext Home", user, isLoggedIn);
    //setIsLoggedIn(true)
    //isLoggedIn && navigate(`conta/${user.id}`)            

    useEffect(() => {
        if (isLoggedIn){
            console.log("Entrou");
            
            navigate(`conta/${user.id}`)            
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn])


    const validateUser = async (email: string, password: string) => {
        const loggedIn = await login(email, password)

        if (!loggedIn) {
            return alert('Email e/ou Senha inválido(s)')
        }

        setIsLoggedIn(true)
        setUser(loggedIn)
        changeLocalStorage({ login: true, usuario: loggedIn })
        navigate(`/conta/${loggedIn.id}`)
    }

    return (
        <>
            <Box padding="25px">
                <Card>
                    <Center>
                        <h1>Faça o login</h1>
                    </Center>
                    <Input placeholder="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} marginBottom="2" />
                    <Input placeholder="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                    <Center>
                        <DButton
                            onClick={() => validateUser(email, password)}
                        />
                    </Center>
                </Card>
            </Box>
        </>
    );
}

export default Home;
