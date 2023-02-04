/* eslint-disable react/display-name */
import { ReactElement } from 'react';
import Document, {
  Html,
  Head as NextHead,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const Head = ({ children }) => (
  <NextHead>
    {children}
    <link rel="icon" type="image/svg+xml" href="/wave.svg" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
      rel="stylesheet"
    />
  </NextHead>
);

export default class CustomDocument extends Document<{
  styleTags: ReactElement[];
}> {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = await renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en">
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
