import '../styles/globals.css'
import Layout from './components/Layout'
import * as styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import "swiper/css/bundle";

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}


export default MyApp
