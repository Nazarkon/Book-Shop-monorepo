import { createContext } from 'react'
import type { DrawerState, DrawerAction } from './types'

export const DrawerContext = createContext<
    | {
          state: DrawerState
          dispatch: React.Dispatch<DrawerAction>
      }
    | undefined
>(undefined)
