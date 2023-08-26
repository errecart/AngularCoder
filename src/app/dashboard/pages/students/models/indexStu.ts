export interface student{
    id: number
    name: string
    lastname: string
    password: string
    age: number
    email: string
    token: string
    role: "admin" | "student"
}

export interface createStudentData{
    name: string
    lastname: string
    password: string
    age: number
    email: string
}

export interface updateStudentData{
    name?: string
    lastname?: string
    password?: string
    age?: number
    email?: string 
    token?: string
}