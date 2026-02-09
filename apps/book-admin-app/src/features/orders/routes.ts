import Orders from './pages/OrdersPage'
import type { RouteObject } from 'react-router-dom'

export const ordersRoutes: RouteObject[] = [
    {
        path: '/orders',
        children: [
            {
                index: true,
                Component: Orders,
            },
        ],
    },
]
