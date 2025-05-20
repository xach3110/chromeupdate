import { Header } from './components/Header'
import {AutoUpdateSection} from './components/ChromeUpdate'
import { VersionSection } from './components/VersionSection'
import {UpdateSection} from './components/UpdateSection'
import {WhyUpdate} from './components/WhyUpdate'
import {HelpSection} from './components/HelpSection'
import { Footer } from './components/footer'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <AutoUpdateSection />
      <VersionSection />
      <UpdateSection />
      <WhyUpdate />
      <HelpSection />
      <Footer />
    </>
  )
}

export default App
