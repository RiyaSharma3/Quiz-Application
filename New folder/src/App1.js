import React from 'react'
import HomeSection from './component/Home/HomeSection'
import About from './component/Home/About'
import Quiz from './component/Home/Quiz';
import ContactUs from './component/Home/ContactUs';
import Footer from './component/Home/Footer';

const App1 = () => {
  return (
    <div>
      <HomeSection/>
      <About/>
      <Quiz/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default App1
