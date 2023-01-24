import React from 'react'
import emptyprofile from "../images/profile.webp"

const CastCard = (props) => {

  const clicked=()=>{
    document.getElementById('leftmenu').className=" translate-x-[1000px] ease-in-out duration-100 absolute top-0 right-0 flex flex-col  bg-[#82C3EC] h-[100vh] w-[200px] md:w-[350px]"
   }


  return (
    <div id='cast' onClick={clicked} className='relative md:mx-[15px] mx-[10px] max-w-[100px] min-w-[100px]  md:min-w-[140px] md:max-w-[140px] border-2 '>

              
    <img className=' max-h-[100px] min-h-[100px] max-w-[95px] min-w-[95px] md:max-w-[135px]  md:min-w-[135px] md:min-h-[160px] md:max-h-[160px]  mx-auto   shadow-xl  ' src={props.image!==null?('https://image.tmdb.org/t/p/w138_and_h175_face'   + props.image): emptyprofile} alt="" />

    <div className='  text-center bg-black md:py-1 ' >

      {/* for big screen  */}
      
    <p className=' hidden md:flex text-xs font-medium md:font-semibold  justify-center ' >{ props.character.length>22?props.character.slice(0,22):props.character}</p>  <p className=' hidden md:flex font-semibold justify-center text-orange-400 text-xs ' > <span className='text-white' >(</span> {  props.name.length>22?props.name.slice(0,22):props.name}<span className='text-white' >)</span></p>


    {/* for small screen  */}
    <p className=' flex md:hidden text-xs font-medium md:font-semibold justify-center ' >{ props.character.length>13?props.character.slice(0,13)+'...':props.character}</p>  <p className='flex md:hidden font-semibold text-orange-400 text-xs justify-center ' > <span className='text-white' >(</span> {  props.name.length>13?props.name.slice(0,13):props.name}<span className='text-white' >)</span></p>

    </div>




  </div>
  )
}

export default CastCard