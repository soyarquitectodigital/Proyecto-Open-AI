
import '../public/assets/vendor/bootstrap/css/bootstrap.min.css';
import '../public/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../public/assets/vendor/boxicons/css/boxicons.min.css';
import '../public/assets/vendor/quill/quill.snow.css';
import '../public/assets/vendor/quill/quill.bubble.css';
import '../public/assets/vendor/remixicon/remixicon.css';
import '../public/assets/vendor/simple-datatables/style.css';
import '../public/assets/css/style.css';
import SSRProvider from 'react-bootstrap/SSRProvider'
import React from 'react'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
        <SSRProvider>
        <Component {...pageProps} />
        </SSRProvider>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>

  )
}