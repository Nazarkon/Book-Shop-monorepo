import { List } from "@chakra-ui/react";
import type { ListRootProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface IMenuListProps<T> extends ListRootProps {
    data: T[];
    onItemClick?: (item: T) => void;
    getKey: (item: T) => string | number;
    renderItem?: (item: T) => ReactNode;
}

export default function MenuList<T>({
    data,
    onItemClick,
    getKey,
    renderItem,
    ...props
}: IMenuListProps<T>) {
    return (
        <List.Root listStyle="none" {...props}>
            {data.map((item) => (
                <List.Item
                    key={getKey(item)}
                    cursor="pointer"
                    onClick={() => onItemClick?.(item)}
                >
                    {renderItem ? renderItem(item) : String(item)}
                </List.Item>
            ))}
        </List.Root>
    );
}