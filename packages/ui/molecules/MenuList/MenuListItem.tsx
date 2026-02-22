import { MenuItem } from "@chakra-ui/react";
import type { MenuItemProps } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";

export default function MenuListItem({ children, ...props }: PropsWithChildren<MenuItemProps>) {
    return (
        <MenuItem {...props}>
            {children}
        </MenuItem>
    );
}  