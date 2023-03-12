// import { AppProps } from 'next/app';
// import Head from 'next/head';
// import { MantineProvider } from '@mantine/core';
//
// export default function App(props: AppProps) {
//     const { Component, pageProps } = props;
//
//     return (
//         <>
//             <Head>
//                 <title>Page title</title>
//                 <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
//             </Head>
//
//             <MantineProvider
//                 withGlobalStyles
//                 withNormalizeCSS
//                 theme={{
//                     /** Put your mantine theme override here */
//                     colorScheme: 'light',
//                 }}
//             >
//                 <Component {...pageProps} />
//             </MantineProvider>
//         </>
//     );
// }

// _app.tsx
import { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { rtlCache } from '../rtl-cache';

export default function App(props: AppProps) {
    const { Component, pageProps } = props;
    return (
        <div dir="rtl">
            <MantineProvider
                theme={{ dir: 'rtl' }}
                withGlobalStyles
                withNormalizeCSS
                emotionCache={rtlCache}
            >
                <Component {...pageProps} />
            </MantineProvider>
        </div>
    );
}
