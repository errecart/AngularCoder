export interface subject{
    id:number
    name:string
    timeW: number
    price: number
    description: string
    image: string
}

export interface subjectCreate{
    name:string
    timeW: number
    price: number
    description: string
    image: string
}

export interface updateSubjectData{
    name?:string
    timeW?: number
    price?: number
    description?: string
    image?: string
}