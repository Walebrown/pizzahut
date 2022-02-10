import axios from 'axios'
import Head from 'next/head'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import PizzaCard from '../components/PizzaCard'
import ProductList from '../components/ProductList'
import styles from '../styles/Home.module.css'

export default function Home({pizzalist}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Hut</title>
        <meta name="description" content="Best Pizza in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Featured/>
      <ProductList pizzalist={pizzalist} />
      
    </div>
  )
}

export const getServerSideProps = async () =>{
  const res = await axios.get("http://localhost:3000/api/products")
  return{
    props :{
      pizzalist: res.data

    }
  }
};
