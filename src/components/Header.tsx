import { Box, Center, Flex, IconButton, Spacer, Text, useToast } from '@chakra-ui/react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../services/storage'
import { AppContext } from './AppContext'
import { MdAccountBalance, MdLogout, MdOutlinePerson2 } from "react-icons/md";

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn, user, setUser } = useContext(AppContext)
  const navigate = useNavigate()
  const toast = useToast()

  const logout = () => {
    toast({
      position: "top",
      duration: 3000,
      isClosable: true,
      render: () => (
        <Box color={"white"} backgroundColor={"red.700"} padding={10} borderRadius={30}>
          <Center><h2>Log Out</h2></Center>
          <Center><h3>Logout feito com sucesso</h3></Center>
        </Box>
      )
    })

    changeLocalStorage({
      login: false, usuario: {
        email: '',
        password: '',
        name: '',
        balance: 0.00,
        id: ''
      }
    })
    setIsLoggedIn(false)
    setUser({
      email: '',
      password: '',
      name: '',
      balance: 0.00,
      id: ''
    })
    navigate('/')
  }

  return (
    <Flex backgroundColor={'orange'} justify="center" align="center" height="150px">
      <Box fontFamily="cursive" >
        <Center>
          <MdAccountBalance fontSize='40px' color="purple" />
          <Text marginStart="10" marginEnd="10" fontSize='5xl'>Dio Mundial Bank</Text>
        </Center>
      </Box>
      {
        isLoggedIn && (
          <>
            {/* <Spacer /> */}
            <Link  to={`/perfil/${user.id}`}>
              <IconButton aria-label='Botão exibir perfil' icon={<MdOutlinePerson2 color="blue" />} />
            </Link>            
            <IconButton marginLeft="2" onClick={() => logout()} aria-label='Botão de sair' icon={<MdLogout color="red" />} />
          </>
        )
      }
    </Flex>

  )
}
