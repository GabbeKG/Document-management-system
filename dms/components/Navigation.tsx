"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const pathname = usePathname();
    return (
        <nav className="mx-10">
            <ul>
                <li className="flex justify-around">
                    <Link href="/editor" className="flex justify-center items-center text-black hover:underline hover:font-bold"><Image alt="" width={50} height={50} src="/newdocument.png" /><p className="mx-1 ">New Document</p></Link>
                    <Link href="/" className="flex justify-center items-center text-black hover:underline hover:font-bold"><Image alt="" width={50} height={50} src="/alldocuments.png"/><p className="mx-1 ">View All</p></Link>
                </li>
            </ul>
        </nav>
    )
}