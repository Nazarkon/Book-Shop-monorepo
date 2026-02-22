import { DrawerFooter } from "@chakra-ui/react";
import { DrawerFooterProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export default function SlideOverFooter({ children, ...props }: PropsWithChildren<DrawerFooterProps>) {
    return (
        <DrawerFooter {...props}>
            {children}
        </DrawerFooter>
    );
}