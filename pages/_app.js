import "@/styles/globals.css";
import SSRProvider from "react-bootstrap/SSRProvider";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SSRProvider>
        <Layout >
        <Component {...pageProps} />
        </Layout>
      </SSRProvider>
    </>
  );
}
