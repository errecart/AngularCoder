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



