import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";


function Uref () {
   const [state, setState] = useState('');
   const myRef = useRef();

   useEffect(() => {
      myRef.current = state
   },[state]);

   return (
         <div className="row">
         <form className="col s12">
         <div className="row">
            <div className="input-field col s6">
               <input id="inputText" type="text" data-length="10" value={state} onChange={e => setState(e.target.value)}/>
               <label htmlFor="inputText">Input text</label>
            </div>
         </div>
         <div className="row">
            <div className="input-field col s12">
               <textarea id="textarea2" className="materialize-textarea" data-length="120" value={myRef.current}></textarea>
               <label htmlFor="textarea2">Textarea</label>
            </div>
            <a className="btn">submit</a>
         </div>
         </form>
      </div>
   )
}

export default Uref;