import React from 'react';
import {Link} from 'react-router-dom';

function Header() {

   return (
      <header className="Header">
         <nav>
            <div className="nav-wrapper #5c6bc0 indigo lighten-1">
               <Link to="ab-spa" className="brand-logo right">ab-spa</Link>
               <ul id="nav-mobile" className="left">
                  <li><Link to="ab-spa">Home</Link></li>
                  <li><Link to="ab-spa/about">About</Link></li>
               </ul>
            </div>
         </nav>
      </header>
   );
}

export default Header;
