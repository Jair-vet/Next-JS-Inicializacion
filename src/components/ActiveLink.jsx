import Link from 'next/link'
import { useRouter } from 'next/router'

export const ActiveLink = ({text, href}) => {

    const  { asPath } = useRouter()

  return (
    <Link legacyBehavior href={href}>
        <a className={`${asPath === href 
            ? 
                'bg-darkBlue ml-4 text-white p-3 rounded-xl px-6 ' 
            : 
                'ml-4 border-b border-indigo-900'
            }`}
        >{text}</a>
    </Link>
  )
}
