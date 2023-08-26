export interface inscription{
    id: number
    name:string
    lastname:string
    email:string
}

export interface CreateInscription{
    name:string | null
    lastname:string | null
    email:string | null

}