import { Text } from "@chakra-ui/react";
import type { TextProps } from "@chakra-ui/react";

interface IParagraphProps extends TextProps {
    text: string;
}

export default function Paragraph({ text, ...props }: IParagraphProps) {
    return <Text {...props}>{text}</Text>;
}