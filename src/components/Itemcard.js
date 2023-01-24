import React from 'react'
import { Link } from 'react-router-dom'


const Itemcard = (props) => {

  
  const clicked=()=>{
    document.getElementById('leftmenu').className=" translate-x-[1000px] ease-in-out duration-100 absolute top-0 right-0 flex flex-col  bg-[#82C3EC] h-[100vh] w-[200px] md:w-[350px]"
   }

  



   
    

  
  return (

      <Link onClick={clicked} to={`/details/${props.id}/${props.title}`}>


        <div onClick={clicked} id='hhh' className=' rounded-[3px] md:my-[20px] flex md:mx-[18px] mx-[5px] my-[6px] md:w-[190px] h-[170px] max-w-[120px] md:max-w-[190px] md:h-[270px]  flex-col  ' >


 
<p id='ss' className=' rounded-[3px] max-h-[170px]  md:max-h-[270px]' > <img className=' min-h-[170px] max-h-[170px] max-w-[120px] min-w-[120px] rounded-[3px] md:min-h-[270px] md:max-h-[270px] md:min-w-[190px]  ' src={props.image===null?'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png':'https://image.tmdb.org/t/p/original'.concat(props.image)} alt="" /></p>
{/* <p className=' rounded-[3px]  max-h-[260px]' > <img className=' rounded-[3px]  max-h-[260px] min-w-[180px] ' src={'https://image.tmdb.org/t/p/original'.concat(movie.poster_path)} alt="" /></p> */}



 <div className=' md:text-[12px] text-[11px] font-medium text-center  text-white flex flex-col items-center justify-center  -translate-y-[170px] md:-translate-y-[270px]   '>

 

 <p id='hh'   className='md:h-[272px] rounded-[3px] md:w-[193px] w-[122px] h-[172px] pb-[2px] px-[6px] md:pb-[6px] md:px-[6px] flex items-end justify-center ' >
 {/* {props.title.length>30?props.title.slice(0,30):props.title} */}
 {props.title}
</p>

 
</div>



</div>


            </Link> 
  )
}

export default Itemcard