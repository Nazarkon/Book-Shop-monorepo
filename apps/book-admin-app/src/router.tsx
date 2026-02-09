import { useRoutes } from 'react-router-dom'
import { NotFound } from '@book-shop/ui'

import { homeRoutes } from './features/home/routes'
import { ordersRoutes } from './features/orders/routes'
import { inventoryRoutes } from './features/inventory/routes'
import { settingsRoutes } from './features/settings/routes'
import MainLayout from './layouts/MainLayout'

export const AppRoutes = () => {
    const element = useRoutes([
        {
            element: <MainLayout />,
            children: [
                ...homeRoutes,
                ...ordersRoutes,
                ...inventoryRoutes,
                ...settingsRoutes,
            ],
        },
        { path: '*', element: <NotFound /> },
    ])

    return element
}
