import Link from 'next/link'
import Navigation from './Navigation'


export default function Header() {
    return (
        <header className={
            "sticky z-10 top-0 flex items-center h-24 bg-blue-200 text-blue-300"
          }>
            <Link href="/">
            <h1 className={" text-7xl ml-10"}>DMS</h1>
            </Link>
            <Navigation/>
            
        </header>
    )
}