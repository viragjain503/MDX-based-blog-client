import SSRProvider from "react-bootstrap/SSRProvider";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

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
