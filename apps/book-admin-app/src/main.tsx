import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './router'
import { DrawerProvider } from './store/DrawerContext'
import './index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <DrawerProvider>
            <ChakraProvider value={defaultSystem}>
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </ChakraProvider>
        </DrawerProvider>
    </StrictMode>
)
