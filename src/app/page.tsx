'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import NavBar from './nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./pages/about"
import CV from "./pages/cv"
import Publications from './pages/publications'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

        return (
                
                <body className = "antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto"> 
                        <Router>
                        <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
                                <h1>AM</h1>
                                        <NavBar/>
                        </aside>
                        <Routes>
                                <Route path="/" element ={<About />} />
                                <Route path="/cv" element={<CV />} />
                                <Route path="/publications" element={<Publications />} />
                        </Routes>
                        </Router>

                        <footer className = "ml-2 mb-1 md:ml-0"
                        style={{
                                fontSize : "0.75rem",
                                position: "fixed",
                                bottom: "0"
                        }}
                        >
                        <p> @ Copyright 2023 Alex Martin. Contact: amart50@u.rochester.edu</p>

                        
                        </footer>

                </body>
                
                
        )
}
