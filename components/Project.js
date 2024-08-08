import Wbs from '../public/images/wbs.jpg'
import Img from "../public/images/profile.jpg"
import LinkedinIcon from '../public/images/linkedin-icon.jpg'
import XIcon from '../public/images/x-icon.jpg'
import TerminalIcon from "../public/images/code-icon-white.png"
import ArrowIcon from "../public/images/arrow-top-right.png"
import Link from "next/link"
import Image from "next/image"
import General from '../styles/General.module.css'

export default function Project() {
    return(
        <div className={`${General.page}`}>
            <div className={`lg:flex block justify-between gap-4 my-10`} >
                <div className="bg-darkmd border border-opacity-25  border-gray-600 p-4 rounded flex-[2]">
                    <div className="text-lg text-gray-300 font-medium">Side, fun projects </div>
                    {
                        project_items.map((pr) => {
                            return <ProjectItem key={pr.id} title={pr.title} description={pr.description} link={pr.link} />
                        })
                    }
                </div>
                <div className="flex-1">
                    <div className="bg-darkmd border border-gray-600 border-opacity-25  p-4 rounded mb-4 lg:mt-0 mt-4">
                        <div className="text-lg text-gray-300 font-medium">Experiences </div>
                        {
                            exp.map((xp) => {
                                return <ExpItem key={xp.id} title={xp.title} description={xp.description} link={xp.link} type={xp.type} date={xp.date} />
                            })
                        }
                    </div>
                    <div className="bg-darkmd border border-opacity-25 border-gray-600 p-4 rounded">
                        <div className="text-lg text-gray-300 font-medium">Contact me </div>
                        <Link href={`https://www.linkedin.com/fiderana-antsa-andriaherilanto/`} className="relative group transition-colors hover:bg-darklg flex items-center p-1 my-4 border border-gray-600 bg-background border-opacity-25 rounded">
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
                        <Link href={`https://x.com/FideranaAntsa1`} className="relative group transition-colors hover:bg-darklg flex items-center p-1 my-4 border border-gray-600 bg-background border-opacity-25  rounded">
                            <div className="relative text-black">
                                <Image src={Img} width={45} height={45} className="rounded-full" />
                                <Image src={XIcon} alt="Arrow Icon" className="rounded-full w-4 h-auto absolute right-0 bottom-0" />
                            </div>
                            <div className="items-center ml-4">
                                <div className="font-medium">Fiderana Antsa</div>
                                <div className="text-xs">x.com</div>
                            </div>
                            <div className="right-4 absolute">
                                <Image src={ArrowIcon} alt="Arrow Icon" className="w-2 h-auto group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export const ProjectItem = ({ title, description, link }) => {
    return (
        <Link href={`${link}`} className="hover:bg-darklg transition-colors flex items-center p-1 my-4 rounded">
            <Image src={TerminalIcon} alt="Terminal Icon" className="rounded w-14 h-auto" />
            <div className="items-center ml-4">
                <div className="font-medium">{title}</div>
                <div className="">{description}</div>
            </div>
        </Link>
    )
}
export const ExpItem = ({ title, description, type, date }) => {
    return (
        <div className="hover:bg-darklg cursor-pointer flex items-center p-1 my-2 rounded transition-colors">
            <Image src={Wbs} className="rounded" width={50} height={50} alt='logo' />
            <div className="items-center ml-4">
                <div className="font-medium flex items-center justify-between">
                    <div className="flex items-center"> 
                        <div>{title}</div>
                        <div className="ml-2 border-opacity-25  border border-gray-300 px-1 text-xs rounded">{type}</div> 
                    </div>
                    <div className="text-xs">{date}</div>
                </div>
                <div className="">{description}</div>
            </div>
        </div>
    )
}

const project_items = [
    {
        id:1,
        title: "Railtrans",
        description: "A simple form for a subway ticket , using Javascript ! ",
        link: "https://fiderana19.github.io/railtrans/"
    },
    {
        id:2,
        title: "Footballer",
        description: "A footballer website , coded in html and css ! ",
        link: "https://fiderana19.github.io/footballer/"
    },
    {
        id:3,
        title: "Portfolio",
        description: "My old portfolio , coded in html and css ! ",
        link: "https://fiderana19.github.io/portfolio/"
    }
    ,
    {
        id:4,
        title: "LinGrad",
        description: "A linear gradient generator , coded in html and css and Javascript ! ",
        link: "https://fiderana19.github.io/lingrad/"
    }
]

const exp = [
    {
        id:1,
        title:"WBS",
        type:"Stage",
        date:"Aug - Nov 2023",
        description:"MERN Stack Developper",
        link: '../public/images/wbs.jpg'
    }
]