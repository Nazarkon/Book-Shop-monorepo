import { DrawerHeader } from "@chakra-ui/react";
import type { DrawerHeaderProps } from "@chakra-ui/react";
import Heading from "../atoms/Heading/Heading";

interface ISlideOverHeaderProps extends DrawerHeaderProps {
    title: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    size?: "2xl" | "xl" | "lg" | "md" | "sm" | "xs";
}

export default function SlideOverHeader({ title, as = "h2", size = "xl", ...props }: ISlideOverHeaderProps) {
    return (
        <DrawerHeader {...props}>
            <Heading title={title} as={as} size={size} />
        </DrawerHeader>
    );
}