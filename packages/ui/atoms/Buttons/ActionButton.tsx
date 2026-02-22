import React from 'react';
import { Button } from "@chakra-ui/react"
import type { ButtonProps } from "@chakra-ui/react"

interface ActionButtonProps extends ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

export function ActionButton({ children, onClick, ...props }: ActionButtonProps) {
    return (
        <Button
            onClick={onClick}
            {...props}
        >
            {children}
        </Button>
    );
}
