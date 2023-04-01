import SSRProvider from "react-bootstrap/SSRProvider";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from "react-scroll-progress-bar"; 
import ScrollToTop from "react-scroll-to-top";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SSRProvider>
        <Layout >
        <Component {...pageProps} />
        </Layout>
        <ProgressBar />
        <ScrollToTop smooth />
      </SSRProvider>
    </>
  );
}
