import { Box, Center, Flex, Spinner, Text } from "@chakra-ui/react"
import { useParams, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { api } from "../api"
import { AppContext } from "../components/AppContext"
import { Card } from "../components/Card"

interface UserData {
  email: string
  password: string
  name: string
  balance: number
  id: string
}

const Perfil = () => {
  const [userData, setUserData] = useState<null | UserData>()
  const { id } = useParams()
  const navigate = useNavigate()

  const { isLoggedIn } = useContext(AppContext)

  !isLoggedIn && navigate('/')

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api
      setUserData(data)
    }

    getData()
  }, [])

  if (userData && id !== userData.id) {
    navigate('/')
  }

  return (

    <Box padding="25px">
      <Card>
      {
        userData === undefined || userData === null ?
          (
            <Center>
              <Spinner size='xl' color='purple' />
            </Center>
          ) :
          (
            <>
              <Flex direction="column" justify="center" align="center">
                <Text color="purple.700" fontSize="3xl" as='b' >Informações do Usuário</Text>
                <Text fontSize="2xl" as='b'>Nome: {userData.name}</Text>
                <Text fontSize="2xl" as='b'>E-mail: {userData.email}</Text>
              </Flex>
            </>
          )
      }
      </Card>
    </Box>
  )
}

export default Perfil
