import LinkedinIcon from '../public/images/linkedin-logo-white.png'
import XIcon from '../public/images/x-logo-white.png'
import GithubIcon from '../public/images/github-icon.jpg'
import Link from "next/link"
import Image from 'next/image'
import General from '../styles/General.module.css'

export default function Header() {
    return(
        <div className={`${General.header} fixed top-0 flex justify-between w-full py-4 z-10`}>
            <div className="text-xl cursor-pointer font-medium">Antsa Fiderana.</div>
            <div className="flex items-center gap-2">
                <Link href="https://www.linkedin.com/in/fiderana-antsa-andriaherilanto/" className=" hover:scale-105 transition-transform">
                    <Image src={LinkedinIcon} alt="Linkeidn Icon" className="rounded w-6 h-auto" />
                </Link>
                <Link href="https://x.com/FideranaAntsa1" className=" hover:scale-105 transition-transform">
                    <Image src={XIcon} alt="Instagram Icon" className="rounded w-6 h-auto" />
                </Link>
                <Link href="https://github.com/fiderana19/" className=" hover:scale-105 transition-transform" >
                    <Image src={GithubIcon} alt="Instagram Icon" className="rounded w-6 h-auto" />
                </Link>
            </div>
        </div>
    )
}