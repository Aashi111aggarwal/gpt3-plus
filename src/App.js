import React from 'react'
import { ReactDOM } from 'react'
import './App.css';
import Footer from './container/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Header from './container/header/Header';
import Brand from './components/brand/Brand';
import Whatgpt3 from './container/whatgpt3/Whatgpt3';
import Feature from './components/feature/Feature'
import Possibility from './container/possibility/Possibility'
// import CTA from './components/cta/CTA';
import Blog from './container/blog/Blog';
import Features from './container/features/Features';
// ,Blog,Possibility,Header,Whatgpt3 } from './container'
// import { Article,Brand,CTA,Feature,Navbar } from './components'
const App=()=>{
    return (
        
        <div className="App">
            <div className="gradient_bg">
            <Navbar/>
            <Header/>
            </div>
            <Brand/>
            <Whatgpt3/>
            <Features/>
            <Possibility/>
            {/* <CTA/>  */}
            <Blog/>
            <Footer/> 
            



            </div>
    
    
    );
}

export default App;