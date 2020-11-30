import { extendTheme } from "@chakra-ui/react";

// Let's say you want to add custom colors
const theme = extendTheme({
    fonts: {
        heading: "Open Sans, system-ui, sans-serif",
        body: "Open Sans, system-ui, sans-serif",
        mono: "Menlo, monospace",
    },
    fontWeights: {
        normal: 300,
        medium: 400,
        bold: 700,
    },
    radii: {
        sm: '5px',
        md: '8px',
    },
})

export default theme;
