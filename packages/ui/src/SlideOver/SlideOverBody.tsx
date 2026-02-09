import { DrawerBody } from "@chakra-ui/react";
import type { DrawerBodyProps } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";

export default function SlideOverBody({ children, ...props }: PropsWithChildren<DrawerBodyProps>) {
    return (
        <DrawerBody {...props}>
            {children}
        </DrawerBody>
    );
}