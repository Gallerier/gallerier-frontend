import { Footer } from "components/Footer";
import Navbar from "components/Navbar";

const MainApp = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto min-h-[100vh]">
        <Component {...pageProps} />
      </div>
      <Footer/>
    </>
  );
};

export default MainApp;
