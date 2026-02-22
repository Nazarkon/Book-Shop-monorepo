import { DrawerRoot, DrawerContent, Portal, DrawerPositioner } from '@chakra-ui/react';
import SlideOverHeader from './SlideOverHeader';
import SlideOverBody from './SlideOverBody';
import SlideOverFooter from './SlideOverFooter';

interface ISlideOverProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    body: React.ReactNode;
    footer?: React.ReactNode;
}

export default function SlideOver({ isOpen, onClose, title, body, footer }: ISlideOverProps) {
    return (
        <DrawerRoot open={isOpen} onOpenChange={onClose}>
            <Portal>
                <DrawerPositioner>
                     <DrawerContent>
                        <SlideOverHeader title={title} />
                        <SlideOverBody>
                            {body}
                        </SlideOverBody>
                    {footer && <SlideOverFooter>{footer}</SlideOverFooter>}
                </DrawerContent>
                </DrawerPositioner>
        </Portal>
        </DrawerRoot>
    );
}