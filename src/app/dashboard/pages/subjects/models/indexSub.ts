export interface subject{
    id:number
    name:string
    timeW: number
    price: number
    categoryId: number

}

export interface subjectCreate{
    name:string
    timeW: number
    price: number

}

export interface updateSubjectData{
    name?:string
    timeW?: number
    price?: number
}