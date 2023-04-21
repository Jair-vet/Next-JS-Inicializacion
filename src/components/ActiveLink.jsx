import Link from 'next/link'

export const ActiveLink = ({text, href}) => {
  return (
    <Link href={href} className='text-darkBlue underline ml-5'>
        {text}
    </Link>
  )
}
