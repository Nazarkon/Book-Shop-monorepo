import { Heading as ChakraHeading } from "@chakra-ui/react";
import type { HeadingProps } from "@chakra-ui/react";

interface IHeadingProps extends HeadingProps {
    title: string;

}

export default function Heading({ title, ...props }: IHeadingProps) {
    return (
        <ChakraHeading {...props}>
            {title}
        </ChakraHeading>
    );
}
