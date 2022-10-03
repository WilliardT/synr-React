import React, { useCallback, useState } from "react";
import { useEffect } from "react";

function Ucb () {
   const [num, setNum] = useState([1,2]);
   const [color, setColor] = useState(false);

   const stylz = {
      color: color ? 'red' : 'black'
   }

   const getSomeResualt = useCallback(() =>{
      console.log('Fetshing')
      return [...num]
   },[num])

   return (
      <div className="ucb">
         <ul style={stylz}>
            <List getSomeResualt={getSomeResualt}/>
         </ul>
         <input type="button" value="Add" onClick={e => setNum ([
            ...num, num[num.length - 1] + 1]
         )} />

         <input type="button" value="change color" onClick={e => setColor(!color)} />
      </div>
   );
}

const List = ({getSomeResualt}) => {
   const [list, setList] = useState([])

   useEffect(() => {
      setList(getSomeResualt())
   },[getSomeResualt])

   return (
      list.map((i, id) => <li key={id}>{i}</li>)
   )
}

export default Ucb;