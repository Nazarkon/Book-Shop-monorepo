import Settings from './pages/SettingsPage'
import type { RouteObject } from 'react-router-dom'

export const settingsRoutes: RouteObject[] = [
    {
        path: '/settings',
        children: [
            {
                index: true,
                Component: Settings,
            },
        ],
    },
]
