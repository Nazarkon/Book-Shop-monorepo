import { MenuRoot } from "@chakra-ui/react";
import MenuListItem from "./MenuListItem";
import type { MenuRootProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface IMenuListProps<T> extends MenuRootProps {
    data: T[];
    onItemClick?: (item: T) => void;
    getKey: (item: T) => string | number;
    getValue: (item: T) => string;
    renderItem?: (item: T) => ReactNode;
}

export default function MenuList<T>({ 
    data, 
    onItemClick, 
    getKey,
    getValue,
    renderItem,
    ...props 
}: IMenuListProps<T>) {
    return (
        <MenuRoot {...props}>
            {data.map((item) => {
                return (
                    <MenuListItem 
                            key={getKey(item)} 
                            value={getValue(item) ?? ''}
                            onClick={() => onItemClick?.(item)}
                        >
                        {renderItem ? renderItem(item) : String(item)}
                    </MenuListItem>
                );
            })}
        </MenuRoot>
    );
}