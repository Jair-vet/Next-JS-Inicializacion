import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { MainLayout } from '@/components/layout/MainLayout'

export default function AboutPage() {
  return (
    <MainLayout>
      <h1 className='text-3xl text-center mb-6 font-bold'>About Page</h1>
      <h1 className='text-center text-5xl font-bold'>
        Ir a <Link href="/" className='text-darkBlue font-bold'>HomePage</Link>
      </h1>

      <p className='text-2xl text-center mt-20'>
        Get started by editing&nbsp;
        <code className='text-sm bg-gray-50 p-2 rounded-md'>src/pages/about.js</code>
      </p>
    </MainLayout>
  )
}
