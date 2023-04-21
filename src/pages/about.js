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

      <main className='mt-72'>

        <h1 className='text-center text-5xl'>
          Regresar a <Link href="/" className='text-darkBlue font-bold'>HomePage</Link>
        </h1>

        <p className='text-2xl text-center mt-20'>
          Get started by editing&nbsp;
          <code className='text-sm bg-gray-50 p-2 rounded-md'>src/pages/index.js</code>
        </p>

      </main>
    </>
  )
}
