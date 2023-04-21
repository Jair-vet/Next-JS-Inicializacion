import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'

export default function AboutPagev() {
  return (
    <>
      <Head>
        <title>About - Jair</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>

        <h1>
        Regresar a <Link href="/">HomePage</Link>
        </h1>

        <p>
          Get started by editing&nbsp;
          <code>src/pages/index.js</code>
        </p>

      </main>
    </>
  )
}
