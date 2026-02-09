import type { ReactNode } from 'react'
import { useReducer, useMemo } from 'react'
import { DrawerContext } from './context'
import { drawerReducer } from './reducer'
import type { DrawerState } from './types'

const initialState: DrawerState = {
    isOpen: false,
    title: '',
    view: null,
}

export const DrawerProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(drawerReducer, initialState)

    const value = useMemo(() => ({ state, dispatch }), [state, dispatch])

    return (
        <DrawerContext.Provider value={value}>
            {children}
        </DrawerContext.Provider>
    )
}
