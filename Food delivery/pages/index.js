//This allows us to enhance our content SEO
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Featured from '@/components/Featured'
import PizzaList from '@/components/PizzaList'
//This is the Home Page



const inter = Inter({ subsets: ['latin'] })

export default function Home({pizzaList}) {
console.log(pizzaList)
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in NewYork</title>
        <meta name="description" content="Best Pizza Shop in Town" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <PizzaList pizzaList={pizzaList}/></div>
  );}
export const getServerSideProps = async ()=>{
const res = await fetch("http://localhost:3000/api/products");

  return{
    props:{
      pizzaList: res.data ,
    },
  };
};