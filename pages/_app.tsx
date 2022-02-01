import '../styles/app.scss'
import type { AppProps } from "next/app";
import Layout from "../components/layouts/Layout";


function MyApp({ Component, pageProps, router }: AppProps) {
  function PageLayout() {
    return <Layout router>
    <Component {...pageProps} />
  </Layout>
  }

  return <PageLayout />
}

export default MyApp;
