import { MenuList } from '@book-shop/ui'
import { menuItems } from '../../utils/constants.ts'
import { useNavigate } from 'react-router-dom'
import type { IMenuItems } from '../../utils/types'

interface NavigationMenuProps {
    items?: IMenuItems[]
    onItemClick?: (item: IMenuItems) => void
}

export function NavigationMenu({
    items = menuItems,
    onItemClick,
}: NavigationMenuProps) {
    const navigate = useNavigate()

    const handleClick = (item: IMenuItems) => {
        if (onItemClick) {
            onItemClick(item)
        } else {
            navigate(item.path)
        }
    }

    return (
        <MenuList
            data={items}
            getKey={(item) => item.id}
            getValue={(item) => item.value}
            renderItem={(item) => item.label}
            onItemClick={handleClick}
        />
    )
}
