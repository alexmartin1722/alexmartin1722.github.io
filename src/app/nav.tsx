import * as React from 'react';
// import Link from 'react-router-dom'
import { Link } from 'react-router-dom';

function NavBar() {
        
        return ( 
<>
        <nav className = "flex overflow-hidden flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
                <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
                {/* <a className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px] text-neutral-500" href="/">About</a>
                <a className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px] text-neutral-500" href="/cv">CV</a>
                <a className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px] text-neutral-500" href="/publications">Publications</a> */}
                        <Link to="/" className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px] text-neutral-500">About</Link>
                        <Link to="/cv" className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px] text-neutral-500">CV</Link>
                        <Link to="/publications" className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px] text-neutral-500">Publications</Link>
                </div>

        </nav>
       
       
       
</>   
        );
}

export default NavBar



