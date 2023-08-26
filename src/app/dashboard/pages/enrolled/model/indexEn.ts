import { inscription } from "../../inscription/models/indexIns"
import { subject } from "../../subjects/models/indexSub"

export interface enrolled{
    id: number
    subjectId: number
    inscriptionId: number
}

export interface enrolledSyI extends enrolled{
    subject:subject
    inscription:inscription
}

export interface createEnrolledData{
    inscriptionId: number | null
    subjectId: number | null
}
