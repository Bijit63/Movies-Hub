import React from 'react'
import search from "../images/searchicon.png"
import { useState } from "react"


import { Link } from 'react-router-dom'


const Searchbar = () => {

  const [searchreco, setsearchreco] = useState([])


  
    
  
  

 
    

  const [value, setvalue] = useState()

    const onchange=(event)=>{  
            setvalue(event.target.value )

            event.target.value!==''?fetch(`https://api.themoviedb.org/3/search/movie?api_key=7e5e27e6b51bcfd87532d3a63a2c2646&language=en-US&query=${event.target.value}&include_adult=false`).then(data=>{ return data.json()}).then(info => { setsearchreco(info.results.slice(0,7))
            console.log(info.results)}):setsearchreco([])
            
          }

         
          const clicked=()=>{
            document.getElementById('leftmenu').className=" translate-x-[1000px] ease-in-out duration-100 absolute top-0 right-0 flex flex-col  bg-[#82C3EC] h-[100vh] w-[200px] md:w-[350px]"
           }
          
 

  return (

    <div onClick={clicked} className='my-[16px] md:max-w-[500px] md:min-w-[500px] max-w-[230px] min-w-[230px]  mx-auto'>



    <div id='searchbar' className=' w-fit mx-auto  flex justify-end rounded-md md:mt-[40px] border-black '>


 <input id='searchtext'  className=' w-[200px] md:w-[450px] h-[30px] md:h-[50px] font-semibold text-center md:text-base text-sm rounded-r-none rounded-l-md  bg-transparent text-white ' type="search" onChange={onchange}   placeholder='Search' /> 

         <Link to={`/search=${value}`}> <div id='searchicon' className=' cursor-pointer  bg-[#0e082437] h-[30px] md:h-[50px]  border-l-[1px] w-[30px] flex justify-center   rounded-r-full items-center md:w-[50px] ' >
        <img src={search} className=" h-[15px] md:h-[16px] rounded-r-2xl  " alt="" />

        </div></Link> 

        </div>


      {/* FOR SEARCH RECOMMENDATION */}
      
      <div id='searchreco' className='text-white font-medium absolute bg-[#060418] z-[100] shadow-lg rounded-b-lg hidden md:block ' >
      
        {
          searchreco.map(element =>{
            
            return(
              <div className='md:max-w-[500px] md:min-w-[500px] max-w-[230px] min-w-[230px]' >

                <Link to={`/details/${element.id}/${element.title}`}  >
                
                 <div className='md:px-[10px] md:py-[15px] hover:bg-[#0d1a38] md:text-base text-sm flex items-center  '>
                 <img src={search} alt="" className='h-[12px] mx-[10px] ' />
                 <div>

                  {element.title}
                 </div>
                </div>
                </Link>

                
              </div>
              

          )})
        }
        
      


    </div>


    </div>
  )
}

export default Searchbar