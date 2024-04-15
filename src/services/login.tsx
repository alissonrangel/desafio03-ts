import { api } from "../api"
import { UserData } from "../pages/Conta"

export const login = async (email: string, password: string): Promise<UserData | null> => {
    const data: any = await api

    if (email !== data.email || password !== data.password) {
        return null
    }

    return {
        email: data.email,
        password: data.password,
        name: data.name,
        balance: data.balance,
        id: data.id,
    }
}
