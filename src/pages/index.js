import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home - Jair</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>

        <h1 className={styles.title}>
          Ir a <Link href="/about">About</Link>
        </h1>

        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/pages/index.js</code>
        </p>

      </main>
    </>
  )
}
