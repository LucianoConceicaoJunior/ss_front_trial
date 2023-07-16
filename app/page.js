import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image'
import styles from './page.module.css'
import CustomJavascript from './components/custom-javascript'
import BestSellers from './components/best-sellers'

export default function Home() {
  const books = []
  return (
    <div className='container-fluid'>
      <h1 className='text-center'>The New York Times Best Sellers</h1>
      <CustomJavascript/>
      <BestSellers/>
    </div>
  );
}