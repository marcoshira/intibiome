import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang="pt-BR">
                <Head>
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="./favicon_io/apple-touch-icon.png"
                    ></link>
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="./favicon_io/favicon-32x32.png"
                    ></link>
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="./favicon_io/favicon-16x16.png"
                    ></link>
                    <link rel="manifest" href="/site.webmanifest"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
