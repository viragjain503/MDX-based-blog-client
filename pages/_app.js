import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from "react-scroll-progress-bar"; 
import ScrollToTop from "react-scroll-to-top";
import "../styles/globals.css"

export default function App({ Component, pageProps }) {

  return (
    <>
        <Layout >
        <Component {...pageProps} />
        </Layout>
        <ProgressBar />
        <ScrollToTop smooth />
    </>
  );
}
