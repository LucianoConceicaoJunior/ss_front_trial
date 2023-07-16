import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image'
import styles from './page.module.css'
import CustomJavascript from './components/custom-javascript'
import BestSellers from './components/best-sellers'

export default function Home() {
  const books = []
  return (
    <>
      <CustomJavascript/>
      <BestSellers/>
    </>
  );
}