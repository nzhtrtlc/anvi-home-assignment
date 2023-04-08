import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { OrganizationState } from './types'

const storeKey = 'organization-storage'

export const useOrganizationStore = create<OrganizationState>()(
  devtools(
    persist(
      set => ({
        orgs: [],
        addOrg: p =>
          set(state => {
            return { orgs: state.orgs ? [...state.orgs, p] : [p] }
          }),
        filter: t =>
          set(state => ({
            filtered: state.orgs.filter(x =>
              x.orgName.toLowerCase().includes(t.toLowerCase())
            )
          })),
        setIsFiltering: x => set(() => ({ isFiltering: x })),
        remove: id => {
          return set(state => ({
            orgs: state.orgs.filter(x => x.id !== id)
          }))
        }
      }),
      {
        name: storeKey
      }
    )
  )
)
