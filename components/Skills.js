import Image from "next/image";
import ReactLogo from '../public/images/react-js-icon.png'
import ExpressLogo from '../public/images/express-js-icon.png'
import JavaScriptLogo from '../public/images/javascript-programming-language-icon.png'
import MongoDBLogo from '../public/images/mongodb-icon.png'
import VueLogo from '../public/images/vue-js-icon.png'
import OracleLogo from '../public/images/oracle-icon.png'
import MysqlLogo from '../public/images/mysql-icon.png'
import PostgreLogo from '../public/images/postgresql-icon.png'
import NestLogo from '../public/images/nest-js-icon.png'
import LaravelLogo from '../public/images/laravel-icon.png'
import TypescriptLogo from '../public/images/typescript-programming-language-icon.png'
import TailwindLogo from '../public/images/tailwind-css-icon.png'
import PyhtonLogo from '../public/images/python-programming-language-icon.png'
import JavaLogo from '../public/images/java-programming-language-icon.png'
import General from '../styles/General.module.css'

export default function Skills() {
    return(
        <div className={`${General.page} my-12`}>
            <div className="flex items-start" >
                <div className="bg-darkmd border-opacity-25 border border-gray-600 px-2 py-1 text-xs font-medium rounded">Skills</div> 
            </div>
            <div className="text-2xl my-4 mb-10 font-medium">I love working on ... </div>
            <div className="md:flex block gap-10">
                <div className="md:w-1/4 w-full md:mt-0 mt-12">
                    <div className="h-16">
                        <Image src={ReactLogo} className="h-16 w-auto" alt="React logo" />
                    </div>
                    <p className="my-4 font-medium text-gray-300">My main framework as frontend is 
                        <span className="w-20 whitespace-nowrap bg-darklg cursor-pointer hover:bg-background transition-colors border inline border-gray-600 boder-opacity-25 mx-2 px-2  rounded py-0">
                            <Image src={ReactLogo} className="w-3 h-auto mr-2 inline" alt="React logo" />
                            <span className=" text-xs font-medium">ReactJS</span>
                        </span>
                        ,and also
                        <span className="w-20 whitespace-nowrap bg-darklg cursor-pointer hover:bg-background transition-colors border inline border-gray-600 boder-opacity-25 mx-2 px-2 rounded py-0">
                            <Image src={VueLogo} className="w-3 h-auto mr-2 inline" alt="VueJs logo" />
                            <span className="text-xs font-medium">VueJS</span>
                        </span>
                        . I like making the style with
                        <span className="w-20 whitespace-nowrap bg-darklg cursor-pointer hover:bg-background transition-colors border inline border-gray-600 boder-opacity-25 mx-2 px-2  rounded py-0">
                            <Image src={TailwindLogo} className="w-3 h-auto mr-2 inline" alt="TailwindCSS logo" />
                            <span className=" text-xs font-medium">TailwindCSS</span>
                        </span>.
                    </p>
                </div>
                <div className="md:w-1/4 w-full md:mt-0 mt-12">
                    <div className="h-16">
                        <Image src={JavaScriptLogo} className="h-16 w-auto" alt="Reatc logo" />
                    </div>
                    <div className="my-4 font-medium text-gray-300">My prefered langage to code is 
                        <span className="w-20 whitespace-nowrap bg-darklg cursor-pointer hover:bg-background transition-colors border inline border-gray-600 boder-opacity-25 mx-2 px-2  rounded py-0">
                            <Image src={JavaScriptLogo} className="w-3 h-auto mr-2 inline" alt="Javascript logo" />
                            <span className=" text-xs font-medium">JavaScript</span>
                        </span>
                        ,and I like other langage as
                        <span className="w-20 whitespace-nowrap bg-darklg cursor-pointer hover:bg-background transition-colors border inline border-gray-600 boder-opacity-25 mx-2 px-2  rounded py-0">
                            <Image src={PyhtonLogo} className="w-3 h-auto mr-2 inline" alt="Python logo" />
                            <span className=" text-xs font-medium">Python</span>
                        </span>,
                        <span className="w-20 whitespace-nowrap bg-darklg cursor-pointer hover:bg-background transition-colors border inline border-gray-600 boder-opacity-25 mx-2 px-2  rounded py-0">
                            <Image src={JavaLogo} className="w-3 h-auto mr-2 inline" alt="Java logo" />
                            <span className=" text-xs font-medium">Java</span>
                        </span>
                        . I can code with
                        <span className="w-20 whitespace-nowrap bg-darklg cursor-pointer hover:bg-background transition-colors border inline border-gray-600 boder-opacity-25 mx-2 px-2  rounded py-0">
                            <Image src={TypescriptLogo} className="w-3 h-auto mr-2 inline" alt="Typescript logo" />
                            <span className=" text-xs font-medium">Typescript</span>
                        </span>
                         in my application.
                    </div>
                </div>
                <div className="md:w-1/4 w-full md:mt-0 mt-12">
                    <div className="h-16">
                        <Image src={NestLogo} className="h-16 w-auto" alt="Reatc logo" />
                    </div>
                    <div className="my-4 font-medium text-gray-300">My main framework as backend is 
                        <span className="w-20 whitespace-nowrap bg-darklg cursor-pointer hover:bg-background transition-colors border border-gray-600 boder-opacity-25 mx-2 px-2  rounded py-0">
                            <Image src={NestLogo} className="w-3 h-auto mr-2 inline" alt="NestJS logo" />
                            <span className=" text-xs font-medium">NestJS</span>
                        </span>
                        ,and also
                        <span className="w-20 whitespace-nowrap bg-darklg cursor-pointer hover:bg-background transition-colors border inline border-gray-600 boder-opacity-25 mx-2 px-2  rounded py-0">
                            <Image src={ExpressLogo} className="w-3 h-auto mr-2 inline" alt="ExpressJS logo" />
                            <span className=" text-xs font-medium">ExpressJS</span>
                        </span>
                        . I can also code with other backend framework like
                        <span className="w-20 whitespace-nowrap bg-darklg cursor-pointer hover:bg-background transition-colors border inline border-gray-600 boder-opacity-25 mx-2 px-2  rounded py-0">
                            <Image src={LaravelLogo} className="w-3 h-auto mr-2 inline" alt="Laravel logo" />
                            <span className=" text-xs font-medium">Laravel</span>
                        </span>.
                    </div>
                </div>
                <div className="md:w-1/4 w-full md:mt-0 mt-12">
                    <div className="h-16">
                        <Image src={MongoDBLogo} className="h-16 w-auto" alt="React logo" />
                    </div>
                    <div className="my-4 font-medium text-gray-300">For database, 
                        <span className="w-20 whitespace-nowrap bg-darklg border cursor-pointer hover:bg-background transition-colors inline border-gray-600 border-opacity-25 mx-2 px-2  rounded py-0">
                            <Image src={MongoDBLogo} className="h-3 w-auto mr-2 inline" alt="MongoDB logo" />
                            <span className=" text-xs font-medium">MongoDB</span>
                        </span>
                        is my favorite. But there are other database manager I know as
                        <span className="w-20 whitespace-nowrap bg-darklg border cursor-pointer hover:bg-background transition-colors inline border-gray-600 boder-opacity-25 mx-2 px-2  rounded py-0">
                            <Image src={MysqlLogo} className="w-3 h-auto mr-2 inline" alt="MySQL logo" />
                            <span className=" text-xs font-medium">MySQL</span>
                        </span>,
                        <span className="w-20 whitespace-nowrap bg-darklg border cursor-pointer hover:bg-background transition-colors inline border-gray-600 boder-opacity-25 mx-2 px-2  rounded py-0">
                            <Image src={PostgreLogo} className="w-3 h-auto mr-2 inline" alt="PostgreSQL logo" />
                            <span className=" text-xs font-medium">PostgreSQL</span>
                        </span>,
                        <span className="w-20 whitespace-nowrap bg-darklg border cursor-pointer hover:bg-background transition-colors inline border-gray-600 boder-opacity-25 mx-2 px-2  rounded py-0">
                            <Image src={OracleLogo} className="w-3 h-auto mr-2 inline" alt="Oracle logo" />
                            <span className=" text-xs font-medium">Oracle</span>
                        </span>.
                    </div>
                </div>
            </div>
        </div>
    )
}
