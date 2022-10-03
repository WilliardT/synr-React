import React, { useEffect, useMemo } from "react";
import { useState } from "react";

const complexComputed = (e) => {
   console.log('computing')
   let i = 0
   while (i < 100000000) i++
   return e * 2
}

function Umemo () {
   const [num, setNum] = useState(24);
   const [color, setColor] = useState(false);

   const stylz = useMemo(e => ({
      color: color ? 'red' : 'black'
   }),[color]);

   const compute = useMemo(e => complexComputed(num),[num]);

   useEffect(e => console.log('slyses chanched'),[stylz]);

   return (
      <div className="umemo">
         <h2 style={stylz}>Сложные вычисления равны: {compute}</h2>
         <input type="button" value="increase" onClick={e => setNum(num + 1)}/>
         <input type="button" value="decrease" onClick={e => setNum(num - 1)}/>
         <input type="button" value="change color" onClick={e => setColor(!color)}/>
      </div>
   );

}


export default Umemo;