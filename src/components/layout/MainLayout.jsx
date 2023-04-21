import Head from "next/head"
import { Navbar } from "../Navbar"

export const MainLayout = ({ children }) => {

    return (
        <>
          <Head>
            <title>Home - Jair</title>
            <meta name="description" content="Home Page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar />
    
          <main className='mt-72'>
            { children }
          </main>
        </>
    )
}
