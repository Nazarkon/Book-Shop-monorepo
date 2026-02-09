import HomePage from './pages/HomePage'
import type { RouteObject } from 'react-router-dom'

export const homeRoutes: RouteObject[] = [
    {
        path: '/',
        children: [
            {
                index: true,
                Component: HomePage,
            },
        ],
    },
]
