// src/context/DrawerContext/reducer.ts
import type { DrawerState, DrawerAction } from './types'

export const drawerReducer = (
    state: DrawerState,
    action: DrawerAction
): DrawerState => {
    switch (action.type) {
        case 'OPEN_DRAWER':
            return {
                isOpen: true,
                title: action.payload.title,
                view: action.payload.view,
            }
        case 'CLOSE_DRAWER':
            return {
                ...state,
                isOpen: false,
            }
        default:
            return state
    }
}
