import type { AppContext, AppProps } from 'next/app'
import { wrapper } from '../redux/store'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  return {
    pageProps: {
      // Call page-level getInitialProps
      ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
    },
  }
}

export default wrapper.withRedux(MyApp)
