import React from 'react'
import AppBar from './components/AppBar'
import Home from './screens/Home'
import AboutMe from './screens/AboutMe'
import MainStack from './screens/MainStack'
import Skills from './screens/Skills'
import Companies from './screens/Companies'
import ContactForm from './screens/ContactForm'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div>
      <AppBar />
      <Home />
      <AboutMe />
      <MainStack />
      <Skills />
      <Companies />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
