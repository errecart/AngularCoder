export interface User{
    id: number
    name: string
    lastname: string
    password: string
    age: number
    email: string
    token: string
}

export interface createUserData{
    name: string
    lastname: string
    password: string
    age: number
    email: string 
}

export interface updateUserData{
    name?: string
    lastname?: string
    password?: string
    age?: number
    email?: string 
}

export interface courses{
    id: number
    name: string
    schedule: string
}

export interface coursesCreate{
    name: string
    schedule: string
}

export interface updateCourseData{
    name?: string
    schedule?: string
}

export interface subject{
    id:number
    name:string
    timeW: number
    price: number

}

export interface subjectCreate{
    name:string
    timeW: number
    price: number

}

export interface updateSubjectData{
    name?:string
    timeW?: number
    price: number
}
