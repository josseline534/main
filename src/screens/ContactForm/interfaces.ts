export type RepresentationUser = 'individual' | 'company'
export interface Form {
  name: string
  representation: RepresentationUser
  company?: string
  subject: string
  contact: string
}

export interface Representation {
  id: string
  name: string
  value: RepresentationUser
  label: string
}