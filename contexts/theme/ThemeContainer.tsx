import { ChakraProvider } from '@chakra-ui/react';
import theme from "../../styles/theme"

function ThemeContainer({ children }) {
    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    );
}

export default ThemeContainer