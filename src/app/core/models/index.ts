export interface User{
    id: number
    name: string
    lastname: string
    email: string 
}

export interface createUserData{
    name: string
    lastname: string
    email: string 
}

export interface updateUserData{
    name?: string
    lastname?: string
    email?: string 
}