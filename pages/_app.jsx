import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import '../styles/globals.scss';
import AOS from "aos";
import React,{useEffect} from 'react';

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
