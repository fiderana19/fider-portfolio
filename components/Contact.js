import Image from "next/image";
import Img from "../public/images/profile.jpg"
import LinkedinIcon from '../public/images/linkedin-icon.jpg'
import XIcon from '../public/images/x-icon.jpg'
import MailIcon from '../public/images/gmail-icon.jpg'
import Link from "next/link"
import ArrowIcon from "../public/images/arrow-top-right.png"
import General from '../styles/General.module.css'

export default function Contact() {
    return(
        <div className={`${General.page}`}>
            <div className={`my-12`}>
                <div className="flex items-start">
                    <div className="bg-darkmd border border-gray-600 border-opacity-25  px-2 py-1 text-xs font-medium rounded">Contact me</div> 
                </div>
                <div className="text-2xl my-4 font-medium">I will be happy to work with you </div>
                <div className="lg:flex block gap-3">
                        <Link href={`https://www.linkedin.com/fiderana-antsa-andriaherilanto/`} className="lg:w-1/3 w-full group transition-colors relative hover:bg-darklg flex items-center p-1 my-4 border border-opacity-25  border-gray-600 bg-darkmd rounded">
                            <div className="relative text-black">
                                <Image src={Img} width={45} height={45} className="rounded-full" />
                                <Image src={LinkedinIcon} alt="Arrow Icon" className="rounded-full w-4 h-auto absolute right-0 bottom-0" />
                            </div>
                            <div className="items-center ml-4">
                                <div className="font-medium">Fiderana Antsa</div>
                                <div className="text-xs">linkedin.com</div>
                            </div>
                            <div className="right-4 absolute">
                                <Image src={ArrowIcon} alt="Arrow Icon" className="w-2 h-auto group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                        </Link>
                        <Link href={`https://x.com/FideranaAntsa1`} className="lg:w-1/3 w-full relative group transition-colors hover:bg-darklg flex items-center p-1 my-4 border border-gray-600 bg-darkmd border-opacity-25  rounded">
                            <div className="relative text-black">
                                <Image src={Img} width={45} height={45} className="rounded-full" />
                                <Image src={XIcon} alt="Arrow Icon" className="rounded-full w-4 h-auto absolute right-0 bottom-0" />
                            </div>
                            <div className="items-center ml-4">
                                <div className="font-medium">Fiderana Antsa</div>
                                <div className="text-xs">x.com</div>
                            </div>
                            <div className="right-4 absolute">
                                <Image src={ArrowIcon} alt="Arrow Icon" className="w-2 object-cover h-auto group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                        </Link>
                        <Link href={`mailto:antsafider@gmail.com`} className="lg:w-1/3 w-full relative transition-colors group hover:bg-darklg flex items-center p-1 my-4 border border-gray-600 bg-darkmd border-opacity-25  rounded">
                            <div className="relative text-black">
                                <Image src={Img} width={45} height={45} className="rounded-full" />
                                <Image src={MailIcon} alt="Arrow Icon" className="rounded-full w-4 h-auto absolute right-0 bottom-0" />
                            </div>
                            <div className="items-center ml-4">
                                <div className="font-medium">antsafider@gmail.com</div>
                                <div className="text-xs">gmail.com</div>
                            </div>
                            <div className="right-4 absolute">
                                <Image src={ArrowIcon} alt="Arrow Icon" className="w-2 h-auto group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                        </Link>
                </div>
            </div>
        </div>
    )
}