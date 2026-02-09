import type { ReactNode } from 'react'

export interface DrawerState {
    isOpen: boolean
    title: string
    view: ReactNode | null
}

export type DrawerAction =
    | { type: 'OPEN_DRAWER'; payload: { title: string; view: ReactNode } }
    | { type: 'CLOSE_DRAWER' }
