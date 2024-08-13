import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Main from './components/Main';
import Footer from './components/Footer';
const App: React.FC = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Main/>
      <Footer/>
    </div>
  )
}
export default App;