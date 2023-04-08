export type Organization = {
  id: string
  orgName: string
  tAssigned: number
  tInuse: number
  pAssigned: number
  pInuse: number
  logoNumber: number
}

export type OrganizationState = {
  orgs: Array<Organization>
  addOrg: (p: Organization) => void
  filter: (t: string) => void
  filtered?: Array<Organization>
  isFiltering?: boolean
  setIsFiltering: (x: boolean) => void
  remove: (id: string) => void
}
