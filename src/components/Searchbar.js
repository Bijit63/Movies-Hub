import React from 'react'
import search from "../images/searchicon.png"
import { useState } from "react"


import { Link } from 'react-router-dom'


const Searchbar = () => {

 
    

  const [value, setvalue] = useState()

    const onchange=(event)=>{  
            setvalue(event.target.value )
            
          }

         
          const clicked=()=>{
            document.getElementById('leftmenu').className=" translate-x-[1000px] ease-in-out duration-100 absolute top-0 right-0 flex flex-col  bg-[#82C3EC] h-[100vh] w-[200px] md:w-[350px]"
           }
          
 

  return (
    <div onClick={clicked} id='searchbar' className=' w-fit mx-auto my-[16px] flex justify-end rounded-md md:mt-[40px] border-black '>

 <input id='searchtext'  className=' w-[200px] md:w-[450px] h-[30px] md:h-[50px] font-semibold text-center md:text-base text-sm rounded-r-none rounded-l-md  bg-transparent text-white ' type="search" onChange={onchange}   placeholder='Search' /> 




         <Link to={`/search=${value}`}> <div id='searchicon' className=' cursor-pointer  bg-[#0e082437] h-[30px] md:h-[50px]  border-l-[1px] w-[30px] flex justify-center   rounded-r-full items-center md:w-[50px] ' >
        <img src={search} className=" h-[15px] md:h-[16px] rounded-r-2xl  " alt="" />

        </div></Link> 

        {/* {a.searchmovie(value)} */}
    </div>
  )
}

export default Searchbar