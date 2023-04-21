import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - Jair</title>
        <meta name="description" content="About Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className='mt-72'>

        <h1 className='text-3xl text-center mb-6 font-bold'>About Page</h1>
        <h1 className='text-center text-5xl font-bold'>
          Ir a <Link href="/" className='text-darkBlue font-bold'>HomePage</Link>
        </h1>

        <p className='text-2xl text-center mt-20'>
          Get started by editing&nbsp;
          <code className='text-sm bg-gray-50 p-2 rounded-md'>src/pages/about.js</code>
        </p>

      </main>
    </>
  )
}
