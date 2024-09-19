import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Movies from './Data'
function Moviedetails() {
    const{id}=useParams()
    const [Movie,setmovie]=useState({})
    useEffect(()=>{
        const film = Movies.find(el=>el.id==id)
        setmovie(film)
    },[Movie])
  return (
    <div style={{display:"flex",flexDirection:"column",color:"blue",justifyContent:"center",alignItems:"center",padding:"50px"}}>
   <h4 style={{fontFamily:"sans-serif"}}> {Movie.describe}</h4> 
<iframe src={Movie.trailer} width={"800px"}height={"500px"}></iframe>
    </div>
  )
}

export default Moviedetails