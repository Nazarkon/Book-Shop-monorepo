import React from 'react';

interface ActionButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

export function ActionButton({ children, onClick }: ActionButtonProps) {
    return (
        <button
            onClick={onClick}
            style={{
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
            }}
        >
            {children}
        </button>
    );
}
