import Contact from '@/components/Contact'
import Copyright from '@/components/Copyright'
import Header from '@/components/Header'
import Profile from '@/components/Profile'
import Project from '@/components/Project'
import Skills from '@/components/Skills'

export default function Home() {

  return(
    <div className={`bg-background`}>
      <div className="md:h-screen h-full">
        <Header />
        <Profile />
      </div>
      <Project />
      <Skills />
      <Contact />
      <Copyright />
    </div>
  )
}