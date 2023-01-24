import React from 'react'
import { useContext } from 'react'
import NoteContext from '../context/Notes/NoteContext'
import { useParams } from 'react-router-dom'




const SearchedMovies = () => {
  
  const query = useParams().searchquery;
  console.log(query)




   const a=useContext(NoteContext)


   const clicked=()=>{
    document.getElementById('leftmenu').className=" translate-x-[1000px] ease-in-out duration-100 absolute top-0 right-0 flex flex-col  bg-[#82C3EC] h-[100vh] w-[200px] md:w-[350px]"
   }
   
  return (
    <div onClick={clicked} className='min-h-[100vh] flex flex-col  ' >

        <div className='flex justify-center  items-center h-[40px] md:h-[70px] ' >
       
        <p className='  text-white md:text-3xl flex justify-center' >Search Results for {query}... </p>
        
        </div>

        <div>{a.searchmovie(query)}</div>
        

    </div>
  )
}

export default SearchedMovies