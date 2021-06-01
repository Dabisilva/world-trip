import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#000000",
      "500": "#999999",
      "600": "#47585B",
      "100": "#DADADA",
      "50": "#F5F8FA",
      "10": "#ffffff",
    },
    yellow: {
      "500": "#FFBA08",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.10",
        color: "gray.600",
      },
    },
  },
});
