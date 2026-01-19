import type { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "../app/layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
