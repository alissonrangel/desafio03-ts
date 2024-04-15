import { UserData } from "../pages/Conta";

interface IDIoBank {
    login: boolean;
    usuario: UserData;
}

const dioBank: IDIoBank = {
    login: false,
    usuario: {
        email: '',
        password: '',
        name: '',
        balance: 0.00,
        id: ''
    },
}

export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem('diobank')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}

export const changeLocalStorage = (dioBank: IDIoBank): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}
