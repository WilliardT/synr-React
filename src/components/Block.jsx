import React from "react";
import {
   BrowserRouter as Router,
   Route,
   Link
 } from "react-router-dom";

function Block () {
   return (
      <Router>
         <div className="block">
            <div className="pagesMenu">
               <Link to="/">fisrt block</Link>
               <Link to="/second">second block</Link>
            </div>
            <div className="blockInner">

               <Route exact path='/'>
                  <div className="firstBlock">
                     <h1>First Block</h1>
                  </div>
               </Route>

               <Route exact path='/second'>
                  <div className="secondBlock">
                     <h1>Second block</h1>
                  </div>
               </Route>

            </div>
         </div>
      </Router>
   );
}

export default Block;