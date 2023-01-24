import React from 'react'

const Footer = () => {
  const clicked=()=>{
    document.getElementById('leftmenu').className=" translate-x-[1000px] ease-in-out duration-100 absolute top-0 right-0 flex flex-col  bg-[#82C3EC] h-[100vh] w-[200px] md:w-[350px]"
   }
  return (
    
    <div onClick={clicked} className='sticky   mt-[30px]   bottom-0  w-[100vw] h-[60px] font-semibold bg-black text-white flex items-center justify-center  ' >
        Created by <span className='text-yellow-400' >&nbsp; Bijit Sinha &nbsp; </span> | Copyright &#169; 2023.
        
        
    </div>
  )
}

export default Footer