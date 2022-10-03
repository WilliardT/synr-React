import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function IncDec (props) {

   // const Test = (a) => {
   //    console.log(a);
   // }

   const [state, setState] = useState(props.counter);
   // const [test, setTest] = useState(() => Test('Avanakedabra'))

   const onChangeCounter = (e) => {
      setState(state => state + e)
   }
   
   const onRandomCounter = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      setState(Math.floor(Math.random() * (max - min + 1) + min))
   }  

   return (
      <div className="incDec">
         <div className="counterIncDec">{state}</div>
         <div className="controlsIncDec">
            <Stack spacing={2} direction="row">
               <Button variant="contained" onClick={() => onChangeCounter(1)}>INC</Button>
               <Button variant="contained" onClick={() => onChangeCounter(-1)}>DEC</Button>
               <Button variant="outlined" onClick={() => onRandomCounter(-50,50)}>RANDOM</Button>
               <Button variant="text">RESET</Button>
            </Stack>
         </div>
      </div>
   )
}

export default IncDec;