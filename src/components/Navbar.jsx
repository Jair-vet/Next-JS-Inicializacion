import { ActiveLink } from './ActiveLink'


export const Navbar = () => {
  return (
    <>
        <nav className='text-center text-2xl m-2 p-2 font-bold'>
            <ActiveLink text="Home" href="/"/>
            <ActiveLink text="About" href="/about"/>
            <ActiveLink text="Contact" href="/contact"/>
        </nav>
    </>
  )
}
