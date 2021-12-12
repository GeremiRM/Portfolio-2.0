import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <title>Geremi Ramos | Software Developer</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500;600;700&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,500;1,600;1,700;1,800;1,900&family=Rajdhani:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
