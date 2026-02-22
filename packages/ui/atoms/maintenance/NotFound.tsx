import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <Box
            minH="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="gray.50"
        >
            <VStack gap={6} textAlign="center" px={6}>
                <Heading
                    fontSize={{ base: '6xl', md: '9xl' }}
                    fontWeight="bold"
                    color="red.500"
                >
                    404
                </Heading>
                <Heading
                    fontSize={{ base: '2xl', md: '4xl' }}
                    fontWeight="semibold"
                    color="gray.800"
                >
                    Page Not Found
                </Heading>
                <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color="gray.600"
                    maxW="md"
                >
                    Oops! The page you're looking for doesn't exist. It might
                    have been moved or deleted.
                </Text>
                <Button
                    colorPalette="red"
                    variant="solid"
                    size="lg"
                    onClick={() => navigate('/')}
                    mt={4}
                >
                    Go Back Home
                </Button>
            </VStack>
        </Box>
    );
}
