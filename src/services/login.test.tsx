import { login } from "./login"

describe('login', () => {

    const mockEmail = 'nath@dio.bank'
    const mockSenha = '123456'
    it('Deve retornar true caso o email e senha seja válido', async() => {
        const response = await login(mockEmail, mockSenha)
        expect(response).toBeTruthy()
    })

    it('Deve retornar false caso o email seja inválido', async() => {
        const response = await login('email@invalido.com', mockSenha)
        expect(response).toBeFalsy()
    })
    it('Deve retornar false caso a senha seja inválido', async() => {
        const response = await login(mockEmail, "senhainvalida")
        expect(response).toBeFalsy()
    })
})