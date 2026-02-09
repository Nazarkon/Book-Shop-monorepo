import { useContext } from 'react'
import { DrawerContext } from '../store/DrawerContext/context'

export const useSlideOver = () => {
    const context = useContext(DrawerContext)
    if (!context) {
        throw new Error('useSlideOver must be used within a DrawerProvider')
    }
    return context
}
