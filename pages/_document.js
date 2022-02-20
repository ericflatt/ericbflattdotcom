import { Head } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      // ...
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=[UA-107339411-2]"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '[UA-107339411-2]', { page_path: window.location.pathname });
            `,
          }}
        />
      </Head>
    );
  }
}