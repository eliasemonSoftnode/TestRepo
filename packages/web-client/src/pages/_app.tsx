import type { AppProps } from 'next/app';
import Layout from '../components';
// import { GlobalContextProvider } from '@/context'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    {/* <GlobalContextProvider> */}
    <Layout>
      <Component {...pageProps} />
    </Layout>
    {/* </GlobalContextProvider> */}
  </>
);
export default App;
