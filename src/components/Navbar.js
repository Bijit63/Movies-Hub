import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import logo from "../images/logo.png"
import cross from '../images/cross.png'

const Navbar = () => {

    
    useEffect(() => {

        window.location.hash==='#/'?document.getElementById('a0').className='  text-amber-600 cursor-pointer  items-center flex hover:bg-slate-300 hover:text-black  px-2 md:px-5 h-[25px] md:h-[55px]':document.getElementById('a0').className=' text-white cursor-pointer  items-center flex hover:bg-slate-300 hover:text-black  px-2 md:px-5 h-[25px] md:h-[55px]'


        window.location.hash==='#/toprated-movies'?document.getElementById('a1').className='  text-amber-600 cursor-pointer  items-center flex hover:bg-slate-300 hover:text-black  px-2 md:px-5 h-[25px] md:h-[55px]':document.getElementById('a1').className=' text-white cursor-pointer  items-center flex hover:bg-slate-300 hover:text-black  px-2 md:px-5 h-[25px] md:h-[55px]'


        window.location.hash==='#/popular-movies'?document.getElementById('a2').className='  text-amber-600 cursor-pointer  items-center flex hover:bg-slate-300 hover:text-black  px-2 md:px-5 h-[25px] md:h-[55px]':document.getElementById('a2').className=' text-white cursor-pointer  items-center flex hover:bg-slate-300 hover:text-black  px-2 md:px-5 h-[25px] md:h-[55px]'


        window.location.hash==='#/upcoming-movies'?document.getElementById('a3').className='  text-amber-600 cursor-pointer  items-center flex hover:bg-slate-300 hover:text-black  px-2 md:px-5 h-[25px] md:h-[55px]':document.getElementById('a3').className=' text-white cursor-pointer  items-center flex hover:bg-slate-300 hover:text-black  px-2 md:px-5 h-[25px] md:h-[55px]'


        window.location.hash==='#/nowplaying'?document.getElementById('a4').className='  text-amber-600 cursor-pointer  items-center flex hover:bg-slate-300 hover:text-black  px-2 md:px-5 h-[25px] md:h-[55px]':document.getElementById('a4').className=' text-white cursor-pointer  items-center flex hover:bg-slate-300 hover:text-black  px-2 md:px-5 h-[25px] md:h-[55px]'
        




      
    }, [])
    
       

    const leftm=()=>{
        document.getElementById('leftmenu').className=" fixed flex translate-x-0 ease-in-out duration-100 top-0 right-0 flex-col  bg-[#82C3EC] h-[100vh] w-[200px] md:w-[350px]"
    }
    const crossclicked=()=>{
        document.getElementById('leftmenu').className=" fixed  translate-x-[1000px] ease-in-out duration-100 top-0 right-0 flex flex-col  bg-[#82C3EC] h-[100vh] w-[200px] md:w-[350px]"
    }
    

    //   document.body.onclick=()=>{document.getElementById('leftmenu').className==="flex translate-x-0 absolute ease-in-out duration-100 top-0 right-0 flex-col  bg-[#82C3EC] h-[100vh] w-[200px] md:w-[350px]"?document.getElementById('leftmenu').className=" translate-x-[1000px] ease-in-out duration-100 absolute top-0 right-0 flex flex-col  bg-[#82C3EC] h-[100vh] w-[200px] md:w-[350px]":document.getElementById('leftmenu').className="flex translate-x-0 absolute ease-in-out duration-100 top-0 right-0 flex-col  bg-[#82C3EC] h-[100vh] w-[200px] md:w-[350px]"}
    


    const toggle = ()=>{
        
        document.getElementById('bottomnav').className==='ease-in-out duration-100 -z-20 -translate-y-[25px] md:-translate-y-[55px] flex flex-col justify-center relative'?document.getElementById('bottomnav').className='ease-in-out duration-100 -z-20 translate-y-0 flex flex-col justify-center relative'  :document.getElementById('bottomnav').className='ease-in-out duration-100 -z-20 -translate-y-[25px] md:-translate-y-[55px] flex flex-col justify-center relative'

        document.getElementById('bottomnav').className==='ease-in-out duration-100 -z-20 -translate-y-[25px] md:-translate-y-[55px] flex flex-col justify-center relative'?document.getElementById('arrimg').className="text-black font-extrabold fa-solid fa-angle-down"  :document.getElementById('arrimg').className=" text-black font-extrabold fa-solid fa-angle-up"
        

        
    }

    
    
        
    


  return (
    <nav id='navmain' className='  z-20 sticky  top-0 md:h-[70px] h-[60px]  '>
        <ul id='navbar' className='  md:h-[70px]   h-[60px] z-10 box-border shadow-md flex justify-between items-center '>


          



            <Link to="/"><li className='text-white   md:text-4xl text-2xl flex items center  '> <img className=' w-[30px] mb-[6px] mx-1 md:mx-5 md:w-[35px] md:mb-[9px] ' src={logo} alt="" /> <button id='heading'  > 
            Movies-Hub </button> </li></Link> 



            {/* <li id='rightside' className='mr-6 text-white relative cursor-pointer '>
                More  
                <ul id='rightmenu' className=" right-0 hidden w-[200px] bg-white text-black absolute z-0">
                    <li>englis</li>
                    <li>hindi</li>
                    <li>tamil</li>
                    <li>telegu</li>
                </ul>

            
            </li> */}


              <li className='md:mr-7 mr-4 text-white  ' >
                <button id='menubar' onClick={leftm} className=" md:h-[40px] ">
            <hr className=' border-2 rounded-lg my-[7px] bg-white   w-[30px] md:w-[40px] h-[2px] md:h-[3px]'/>
            <hr className=' border-2 rounded-lg my-[7px] bg-white   w- [30px] md:w-[40px] h-[2px] md:h-[3px]'/>
            <hr className=' border-2 rounded-lg my-[7px] bg-white   w-[30px] md:w-[40px] h-[2px] md:h-[3px]'/>
           
                </button>





                
            <ul id='leftmenu' className="fixed translate-x-[1000px] top-0 right-0 flex-col  bg-[#82C3EC] h-[100vh] w-[200px] md:w-[350px]">

                
                    <li  className=' h-[60px] md:h-[70px] border-b-2 bg-black my-0 flex flex-row' >  <span id='cross' className=' ml-[12px] md:ml-[28px] md:text-[40px] text-[28px] items-center flex cursor-pointer ' onClick={crossclicked} ><img className='md:w-[32px] w-[20px]' src={cross} alt="" /></span> </li>

                    
                    <li className=' mr-[10px] md:mr-9 ml-[25px] md:ml-[70px] text-[15px] md:text-xl my-4  ' > <button className=' active:text-yellow-200 text-white ' > About </button>  <hr className="text-white mt-1 border-1 mr-2 " /> </li>
                    <li className=' mr-[10px] md:mr-9 ml-[25px] md:ml-[70px] text-[15px] md:text-xl my-4  ' > <button className=' active:text-yellow-200 text-white ' >Premium Membership</button>  <hr className="text-white mt-1 border-1 mr-2 " /> </li>
                    <li className=' mr-[10px] md:mr-9 ml-[25px] md:ml-[70px] text-[15px] md:text-xl my-4  ' > <button className=' active:text-yellow-200 text-white ' > Reviews </button> <hr className="text-white mt-1 border-1 mr-2 " /> </li>
                    
                    <li className=' mr-[10px] md:mr-9 ml-[25px] md:ml-[70px] text-[15px] md:text-xl my-4  ' > <button className=' active:text-yellow-200 text-white ' > Support </button>  <hr className="text-white mt-1 border-1 mr-2 " /> </li>
                    
                   <Link to="/contact-us"> <li className=' mr-[10px] md:mr-9 ml-[25px] md:ml-[70px] text-[15px] md:text-xl my-4  ' > <button className=' active:text-yellow-200 text-white ' > Contact Us</button>  <hr className="text-white mt-1 border-1 mr-2 " /> </li></Link> 
                  
                    <li className='  text-center text-white text-base md:text-base my-4    ' >Follow us on</li>


                    <li className=' text-sm text-center md:text-lg my-1' >
                        <ul className='flex justify-center  space-x-4 ml-1 md:space-x-7 md:mr-[50px]'>
                            <li className='md:min-w-[35px]  md:max-w-[35px] max-w-[25px] min-w-[25px] ' > <img className=' rounded-lg ' src="https://seeklogo.com/images/I/instagram-logo-041EABACE1-seeklogo.com.png" alt=""   /> </li>
                            <li className='md:min-w-[35px]  md:max-w-[35px] max-w-[25px] min-w-[25px] ' > <img className=' rounded-lg ' src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-icon-png-image_6315986.png" alt=""   /> </li>
                            <li className='md:min-w-[35px]  md:max-w-[35px] max-w-[25px] min-w-[25px] ' > <img className=' bg-white rounded-lg ' src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt=""   /> </li>
                        </ul>
                    </li>

                </ul>
            
            </li>
        </ul>





        <div id='bottomnav' className='-z-20 -translate-y-[25px] md:-translate-y-[55px]  flex flex-col justify-center relative'>

            <div id='genreNavbar' className=' h-[25px] md:h-[55px] shadow-black shadow-xs box-border  bg-white text-[#4b3073] font-medium text-xs md:text-base md:font-semibold flex  justify-around items-center  ' >

       
            <Link to="/" className=' '  >  <li id='a0' className='text-white cursor-pointer items-center flex hover:bg-slate-300 hover:text-black  px-2 md:px-5 h-[25px] md:h-[55px] ' >Home</li></Link> 
            <Link to="/toprated-movies" className=' '  >  <li id='a1' className='text-white cursor-pointer items-center flex hover:bg-slate-300 hover:text-black  px-2 md:px-5 h-[25px] md:h-[55px] ' >Top-Rated</li></Link> 
      <Link to="/popular-movies" className=''  > <li id='a2' className='text-white cursor-pointer  items-center flex hover:bg-slate-300 hover:text-black  px-2 md:px-5 h-[25px] md:h-[55px] ' >Popular</li></Link> 
      <Link to="/upcoming-movies" className=''  > <li id='a3' className='text-white cursor-pointer  items-center flex hover:bg-slate-300 hover:text-black  px-2 md:px-5 h-[25px] md:h-[55px] ' >Upcoming</li></Link> 
      <Link to="/nowplaying" className=''  > <li id='a4' className='text-white cursor-pointer  items-center flex hover:bg-slate-300 hover:text-black  px-2 md:px-5 h-[25px] md:h-[55px] ' >Now Playing</li></Link> 
        
            </div>



        <div id='togglearrow' onClick={toggle} className=' flex justify-center ' >
        <div className="md:h-[15px] md:w-[20px] h-[13px] w-[20px] cursor-pointer rounded-b-full bg-white  flex justify-center items-center " > <i id='arrimg' className=" text-black font-extrabold fa-solid fa-angle-down" ></i></div>
        </div>


        </div>


    

       
        
    </nav>
  )
}

export default Navbar