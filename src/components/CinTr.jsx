import React, { useEffect, useState } from "react";
import Albums from "./Albums";


const albumApi = 'https://jsonplaceholder.typicode.com/albums/';
const albumTop = 'https://jsonplaceholder.typicode.com/albums';

function CinTr () {
   const [album,setAlbum] = useState([]);
   const [term, setTerm] = useState('');

   const onHandleTerm = (e) => {
      setTerm(e.target.value)
   }

   useEffect (() => {
      fetch(albumTop)
      .then(res => res.json())
      .then(res => setAlbum(res))
   },[]);

   const onHandleSearch = () => {
         fetch(albumApi)
         .then(res => res.json())
         .then(res => setAlbum(res))
   }

   return (
      <>
         <header>
            <input type="text" placeholder="поиск..." value={term} onChange={onHandleSearch}/>
         </header>
         <div className="albums">
            {album.map((elem) => <Albums key={elem.id} {...elem}/>)}
         </div>
      </>
   );
}


export default CinTr;