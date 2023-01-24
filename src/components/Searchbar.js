import React from 'react'
import search from "../images/searchicon.png"
import { useState } from "react"
import { useContext } from 'react'
import NoteContext from '../context/Notes/NoteContext'
import { Link } from 'react-router-dom'


const Searchbar = () => {

 const a=useContext(NoteContext)
    

  const [value, setvalue] = useState()

    const onchange=(event)=>{  
            setvalue(event.target.value )
            
          }

         
          const clicked=()=>{
            document.getElementById('leftmenu').className=" translate-x-[1000px] ease-in-out duration-100 absolute top-0 right-0 flex flex-col  bg-[#82C3EC] h-[100vh] w-[200px] md:w-[350px]"
           }
          
 

  return (
    <form onClick={clicked} id='searchbar' action={`/#/search=${value}`} className=' w-fit mx-auto my-[16px] flex justify-end rounded-md md:mt-[40px] border-black '>

 <input id='searchtext'  className=' w-[200px] md:w-[450px] h-[30px] md:h-[50px] font-semibold text-center md:text-base text-sm rounded-r-full md:rounded-r-none rounded-l-md  bg-transparent text-white ' type="search" onChange={onchange}   placeholder='Search' /> 




         <Link to={`/search=${value}`}> <div id='searchicon' className=' hidden cursor-pointer  bg-[#0e082437] h-[30px] md:h-[50px]  md:border-l-[1px] w-[25px] md:flex justify-center   md:rounded-r-full items-center md:w-[50px] ' >
        <img src={search} className=" h-[15px] md:h-[16px] rounded-r-2xl  " alt="" />

        </div></Link> 

        {/* {a.searchmovie(value)} */}
    </form>
  )
}

export default Searchbar