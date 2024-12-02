import Image from "next/image";
import Img from "../public/images/profile.jpg"
import MadagascarFlag from '../public/images/madagascar-flag-icon.png'
import DownloadIcon from '../public/images/download-icon.png'
import General from '../styles/General.module.css'
import Link from "next/link";

export default function Profile() {
    return(
        <div className={`${General.page} md:flex block justify-between h-full items-center`}>
            <div className="flex-[2] md:my-16 md:py-0 pt-32 ">
                <div className="lg:text-5xl sm:text-4xl text-3xl font-bold">Antsa Fiderana ANDRIAHERILANTO</div>
                <div className="text-2xl my-4 font-medium text-bluecolor">MERN Stack Developper</div>
                <div className="text-md text-gray-400">I'm a MERN Stack Developper !
                Living in 
                <span className="w-20 bg-darklg whitespace-nowrap cursor-pointer hover:bg-background transition-colors border inline border-gray-600 boder-opacity-25 mx-2 px-2  rounded py-0">
                    <Image src={MadagascarFlag} className="w-4 h-auto mr-2 inline" alt="Reatc logo" />
                    <span className=" text-xs font-medium">Madagascar</span>
                </span>.
                </div>
                <Link href={`/pdf/cv-fiderana-vr.pdf`} download className="flex w-max">
                    <div className=" bg-darklg whitespace-nowrap cursor-pointer hover:bg-background transition-colors border border-gray-600 boder-opacity-25 px-4 my-4 rounded py-1">
                        <Image src={DownloadIcon} className="w-4 h-auto mr-2 inline" alt="Download icon" />
                        <span className=" text-md font-medium">Download my CV</span>
                    </div>
                </Link>
            </div>
            <div className="flex-1 overflow-hidden w-1/2 mx-auto rounded-full">
                <Image src={Img} alt="Profile pic" className="rounded-full duration-300 w-full h-auto hover:scale-105 transform transition-transform" />
            </div>
        </div>
    )
}