import { Box } from '@chakra-ui/react'
import { Outlet, useNavigate } from 'react-router-dom'
import { ActionButton } from '@book-shop/ui'
import { useSlideOver } from '../hooks/useSlideOver'
import { SlideOver } from '@book-shop/ui'
import {NavigationMenu} from '../components/navigation/NavigationMenu'

const MainLayout = () => {
    const { state, dispatch } = useSlideOver()
    const navigate = useNavigate()

    return (
        <Box minH="100vh" bg="gray.100">
            <ActionButton
                onClick={() =>
                    dispatch({
                        type: 'OPEN_DRAWER',
                        payload: { title: 'Add New Item', view: 'ADD_ITEM' },
                    })
                }
                colorPalette="blue"
                variant="solid"
                size="lg"
            >
                Add New Item
            </ActionButton>
            <Box as="main" p="4">
                <Outlet />
            </Box>
            <SlideOver
                isOpen={state.isOpen}
                title={state.title}
                body={
                    <NavigationMenu
                        onItemClick={(item) => {
                            navigate(item.path)
                            dispatch({ type: 'CLOSE_DRAWER' })
                        }}
                    />
                }
                onClose={() => dispatch({ type: 'CLOSE_DRAWER' })}
            />
        </Box>
    )
}

export default MainLayout
