import React from 'react';
import { Button, Stack, Text } from "@chakra-ui/react"

interface ActionButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

export function ActionButton({ children, onClick }: ActionButtonProps) {
    return (
        <Button
            onClick={onClick}
            colorPalette="red"
            variant="solid"
            size="md"
            fontWeight="bold"
            borderRadius="md"
        >
            {children}
        </Button>
    );
}
