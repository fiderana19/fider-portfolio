import Link from 'next/link'
import General from '../styles/General.module.css'
import HackerRankIcon from '../public/images/hackerrank.png'
import CertificationIcon from '../public/images/medal.png'
import Image from 'next/image'

export default function Certification() {
    return(
        <div className={`${General.page}`}>
            <div className={`my-12`}>
                <div className="flex items-start">
                    <div className="bg-darkmd border border-gray-600 border-opacity-25  px-2 py-1 text-xs font-medium rounded">Certifications</div> 
                </div>
                <div className="text-2xl my-4 font-medium">I'm certified on...</div>
                <div className="lg:flex block gap-3">
                    <Link href={`https://www.hackerrank.com/certificates/1cc3d8b76334`} className="lg:w-1/2 w-full group transition-colors relative hover:bg-darklg flex items-center p-3 my-4 border border-opacity-25  border-gray-600 bg-darkmd rounded">
                        <div className="relative text-black">
                            <Image src={CertificationIcon} width={50} height={50} alt="Profile pic" className="rounded-full" />
                            <Image src={HackerRankIcon} alt="Linkedin icon" className="rounded-full w-4 h-auto absolute right-0 bottom-0" />
                        </div>
                        <div className="items-center ml-4">
                            <div className="font-medium">SQL (Basic)</div>
                            <div className="text-xs">HackerRank</div>
                        </div>
                    </Link>
                    <Link href={`https://www.hackerrank.com/certificates/d7e331dea93a`} className="lg:w-1/2 w-full group transition-colors relative hover:bg-darklg flex items-center p-3 my-4 border border-opacity-25  border-gray-600 bg-darkmd rounded">
                        <div className="relative text-black">
                            <Image src={CertificationIcon} width={50} height={50} alt="Profile pic" className="rounded-full" />
                            <Image src={HackerRankIcon} alt="Linkedin icon" className="rounded-full w-4 h-auto absolute right-0 bottom-0" />
                        </div>
                        <div className="items-center ml-4">
                            <div className="font-medium">Javascript (Basic)</div>
                            <div className="text-xs">HackerRank</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}