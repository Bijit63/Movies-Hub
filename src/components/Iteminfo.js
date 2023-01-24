import React from 'react'
import { useEffect , useState } from 'react'
import CastCard from './CastCard'
import Item from "./Item.js"
import YouTube  from 'react-youtube'
import { useParams } from 'react-router-dom'

const Iteminfo = (props) => {

    const [details, setdetails] = useState({})
    const [year,setyear] = useState()
    const [rating,setrating] = useState()
    const [genre,setgenre] = useState([])
    const [cast,setcast]= useState([])
    const [videoID,setvideoID]= useState()
    


    // useparams
    let paramsID = useParams().id;
    let paramsName = useParams().name;

    console.log(paramsID,paramsName)


    

    
    const clicked=()=>{
      document.getElementById('leftmenu').className=" translate-x-[1000px] ease-in-out duration-100 absolute top-0 right-0 flex flex-col  bg-[#82C3EC] h-[100vh] w-[200px] md:w-[350px]"
     }
    
    
    

    useEffect(() => {


      //TO GET THE DETAILS,YEAR,GENRE


      document.getElementById('iteminfomain').className=  ` hidden min-h-[100vh] flex flex-col mx-auto `
        fetch(`https://api.themoviedb.org/3/movie/${paramsID}?api_key=7e5e27e6b51bcfd87532d3a63a2c2646&language=en-US`).
        then(data=> {
          return data.json()}).then(info=> {setdetails(info);

            const date= new Date(info.release_date);
            setyear(date.getFullYear());
            const rate = info.vote_average;
            setrating(rate.toString().slice(0,3));
            setgenre(info.genres);
            document.getElementById('iteminfomain').className=  `min-h-[100vh] flex flex-col mx-auto `
            


            // TO GET THE BACKDROP IMAGE
             
              
              let a= 'https://image.tmdb.org/t/p/original'.concat(info.backdrop_path);
             
              document.getElementById('backiteminfo').style=`background: url(${a}); background-repeat: repeat ;background-size: 100vw 100% ; height: 100%;box-shadow: inset 0px -250px 900px  ; `
            }) 
           





         


          






          // TO GET THE CAST AND CREW
        
        
          fetch(`https://api.themoviedb.org/3/movie/${paramsID}/credits?api_key=7e5e27e6b51bcfd87532d3a63a2c2646&language=en-US`).then(data=> {
            
          return data.json()}).then(info=>{ setcast(info.cast) 
         }) 


         // TO GET TRAILER VIDEO 

          // eslint-disable-next-line 
          fetch(`https://api.themoviedb.org/3/movie/${paramsID}/videos?api_key=7e5e27e6b51bcfd87532d3a63a2c2646&language=en-US`).then(data=> {return data.json()}).then(info=>{ info.results.map(element=>
          {
            
            if(element.type==='Trailer')
            {
              setvideoID(element.key)
            }
          }) 
        }) 
        
        


        //TO GET THE BACKGROUND WALLPAPER
        

        




        
        
        
        
        // eslint-disable-next-line 
      },[] )  

      
      
          
         




      
      
      
      
      const rightclick=()=>{
        
        document.getElementById('slider').scrollLeft=document.getElementById('slider').scrollLeft+340;
        // console.log(shift)
        // setshift(shift+170)
      }
      
      const leftclick=()=>{
        document.getElementById('slider').scrollLeft=document.getElementById('slider').scrollLeft-340;
        }


        const rightclick1=()=>{
          
          document.getElementById('slider1').scrollLeft=document.getElementById('slider1').scrollLeft+226.4;
          // console.log(shift)
          // setshift(shift+170)
        }
        
        const leftclick1=()=>{
          document.getElementById('slider1').scrollLeft=document.getElementById('slider1').scrollLeft-226.4;
        }
        
        
        
        
        // for bigger screen 


        
       
          const opts2={
            height :'415',
            width : '297'
           }
           
      
       
         const opts={
          height :'485',
          width : '365'
                 }




         
         const right=()=>{
           document.getElementById('sliderposter').scrollLeft=document.getElementById('sliderposter').scrollLeft+390;
           document.getElementById('dott2').className='mx-[5px] bg-gray-400 rounded-full mt-[20px] w-[10px] h-[10px] '
            document.getElementById('dott1').className='mx-[5px] bg-gray-400 rounded-full mt-[20px] w-[5px] h-[5px] '
           
          }
          const left =()=>{
            document.getElementById('sliderposter').scrollLeft=document.getElementById('sliderposter').scrollLeft-390;
            document.getElementById('dott1').className='mx-[5px] bg-gray-400 rounded-full mt-[20px] w-[10px] h-[10px] '
            document.getElementById('dott2').className='mx-[5px] bg-gray-400 rounded-full mt-[20px] w-[5px] h-[5px] '
           
         }




        //  for smaller screen 
         const opts1={
          height :'426',
          width : '296'
         }

         
         const right1=()=>{
           document.getElementById('sliderposter1').scrollLeft=document.getElementById('sliderposter').scrollLeft+390;
           document.getElementById('sdot2').className='mx-[5px] bg-gray-400 rounded-full mt-[20px] w-[10px] h-[10px] '
            document.getElementById('sdot1').className='mx-[5px] bg-gray-400 rounded-full mt-[20px] w-[5px] h-[5px] '
           
          }
          const left1 =()=>{
            document.getElementById('sliderposter1').scrollLeft=document.getElementById('sliderposter').scrollLeft-390;
            document.getElementById('sdot1').className='mx-[5px] bg-gray-400 rounded-full mt-[20px] w-[10px] h-[10px] '
            document.getElementById('sdot2').className='mx-[5px] bg-gray-400 rounded-full mt-[20px] w-[5px] h-[5px] '
           
         }


    
        
    



    

  return (
    <div onClick={clicked} className='min-h-[100vh] '  >

      <div id='iteminfomain' className={`min-h-[100vh] flex flex-col mx-auto `} >

      








     


      {/* Upper Part  */}

      <div id='drop' className='  ' >
 
      <div id= 'backiteminfo' className='  overflow-hidden  ' ></div>

     

      <div id='iteminfo' className='   text-white flex mx-auto md:mt-[30px] mt-[20px] w-fit  ' >

    

         <div className=' md:px-[20px] md:max-w-[820px]  md:pr-[60px] ' >












          {/* HEADING */}


        <h1 id='infotitle' className='  h-fit py-2  text-center md:text-left mx-auto text-2xl  md:text-4xl   ' >
            {paramsName +  " ( " +year+ " )"}
        </h1>








        {/* GENRE PART  */}
       

        <div  className='   md:my-3 my-1  text-center md:text-left  '>



        <div className=' border-t-2 md:pt-[15px] py-[5px]  '>
          <span className='border-2 text-xs md:text-base rounded-md mr-[10px] px-[4px] py-[2px] md:px-[5px] md:py-[2px]' >{details.adult===false?"PG - 13":"R - Rated"}</span>
          <span id='infogenre' className=' text-sm md:text-lg md:px-[4px] md:ml-[20px] md:pt-[3px]'>{genre.map( element=> {return element.name+" " })}</span>
        </div>
        


        </div>









        {/* IMAGE PART FOR SMALLER SCREEN */}

      
        <div className='flex md:hidden flex-col' >

          <div  className='flex items-center justify-center mx-[20px]  '>

          

        <i onClick={left1} class="fa-solid fa-caret-left bg-white text-black text-xl px-[1px]"></i>


          <div id='sliderposter1' className=' w-[300px]  flex  scroll-smooth whitespace-nowrap  overflow-hidden ' >

           

        <img id='smallimg' className='  border-2 shadow-xl max-h-[430px] min-h-[430px]  max-w-[300px]  min-w-[300px] ' src={'https://www.themoviedb.org/t/p/w440_and_h660_face'   +details.poster_path} alt="" />
            




        
          <YouTube id='youtube1' className=' flex items-center justify-center border-2 ' opts={opts1} videoId={videoID} />


       

          </div>
        
          <i onClick={right1} class="fa-solid fa-caret-right bg-white text-black text-xl px-[1px]"></i>

          </div>


        {/* dots  */}
        <div className='flex items-center justify-center'>
        <p id='sdot1' className='mx-[5px] bg-gray-400 rounded-full mt-[20px] w-[10px] h-[10px] ' ></p>
        <p id='sdot2' className='mx-[5px] bg-gray-400 rounded-full mt-[20px] w-[5px] h-[5px] ' ></p>
        </div>



        </div>












        {/* SUMMARY PART */}

        <div className=' text-center md:text-left mx-[10px] md:mx-0  mt-6 border-2 ' >
           <p className=' md:text-xl bg-black font-serif font-bold border-b-2 px-[10px] py-[5px]' >Summary </p> 
            <p id='infosummary' className=' md:mt-[5px] px-[11px] py-[4px]  ' >{details.overview}</p>  
        </div >














          
        {/* ADDitional Details Part  */}

          <div className='flex flex-col justify-center md:items-start items-center mt-[10px]' >

        
          
        <div className=' flex  md:my-[6px] my-[5px] items-center    ' >  <p className='font-semibold  md:text-lg border-2 bg-black px-2 w-[100px]     ' > {details.status}  </p>   <p className='border-r-2 border-y-2 py-[2px]  px-2 w-[140px] text-sm md:text-base '>{details.release_date}</p> </div>

        <div className=' flex  md:my-[6px] my-[5px] items-center        ' >  <p className='font-semibold  md:text-lg border-2 bg-black px-2 w-[100px]   ' >Runtime   </p> <p className='border-r-2 border-y-2 py-[2px] px-2 w-[140px] text-sm md:text-base '> {details.runtime} minutes</p> </div>


        <div className=' flex  md:my-[6px] my-[5px] items-center         ' >  <p className='font-semibold  md:text-lg border-2 bg-black px-2 w-[100px]  ' >Ratings   </p> <p className='border-r-2 border-y-2 py-[2px]   px-2 w-[140px] text-sm md:text-base '> {rating} ({details.vote_count})</p> </div>
        
        
          </div>
        



        
        </div>















          {/* IMAGE PART FOR BIGGER */}

      
        <div className='hidden md:flex flex-col' >

          <div  className=' hidden md:flex items-center justify-start mx-[20px]  '>

          

        <i onClick={left} class="fa-solid fa-caret-left bg-white text-black text-xl px-[1px]"></i>


          <div id='sliderposter' className='  lg:w-[370px] md:w-[300px]  flex  scroll-smooth whitespace-nowrap  overflow-hidden ' >

           

        <img id='bigimg' className='  border-2 shadow-xl lg:max-h-[490px] lg:min-h-[490px] lg:max-w-[370px]  lg:min-w-[370px] md:max-h-[420px] md:min-h-[420px] md:max-w-[300px]  md:min-w-[300px] ' src={'https://www.themoviedb.org/t/p/w440_and_h660_face'   +details.poster_path} alt="" />
            




        
          <YouTube id='youtube' className=' hidden lg:flex items-center justify-center border-2 ' opts={opts} videoId={videoID} />
          <YouTube id='youtube' className=' md:flex lg:hidden items-center justify-center border-2 ' opts={opts2} videoId={videoID} />


       

          </div>
        
          <i onClick={right} class="fa-solid fa-caret-right bg-white text-black text-xl px-[1px]"></i>

          </div>



        {/* dots  */}
        <div className='flex items-center justify-center'>
        <p id='dott1' className='mx-[5px] bg-gray-400 rounded-full mt-[20px] w-[10px] h-[10px] ' ></p>
        <p id='dott2' className='mx-[5px] bg-gray-400 rounded-full mt-[20px] w-[5px] h-[5px] ' ></p>
        </div>



        </div>



         </div>






        {/* WATCHNOW  */}


         <div className='md:mt-[30px]  my-[20px] bg-black border-2 text-white font-semibold rounded-md mx-auto w-fit  px-[10px] py-[5px] '>

         <a className=' font-bold ' href={details.homepage} rel="noreferrer" target='_blank' >Homepage</a>  
  </div>

         </div>




         
         {/* CAST PART */}




         
            


          <div className=' border-t-2  md:border-none bg-transparent flex flex-col justify-center  ' >

         <h1 id='infotitle' className='   text-center md:mx-auto text-white  h-fit py-2 md:min-w-[1190px] md:max-w-[1190px] md:mt-[50px]   md:text-4xl text-2xl   ' >
            CAST
      
        </h1>


          <div className='flex items-center cursor-pointer justify-center ' >

            <div className='hidden md:flex' > <i id='leftclick' onClick={leftclick} className=" fa-solid fa-caret-left  md:float-none mx-[0px] lg:mx-[65px] md:mx-[30px] bg-slate-300 md:px-[12px] md:w-fit md:py-[7px] text-xl md:rounded-full text-black shadow-lg border-[2px] hover:border-white hover:text-white hover:bg-black hover:duration-300 border-black "></i>
          </div>

         
          <div id='slider'  className='cast flex  justify-between text-white  md:py-5 overflow-x-scroll md:overflow-hidden scroll-smooth whitespace-nowrap  ' >
            {cast.map(element=> {return <CastCard image={element.profile_path} key={element.id} name={element.name} character={element.character} /> })}
          </div>



          <div className='hidden md:flex' >
            <i id='rightclick' onClick={rightclick} className=" fa-solid fa-caret-right  md:float-none mx-[0px] lg:mx-[65px] md:mx-[30px] bg-slate-300 md:px-[12px] md:w-fit md:py-[7px] text-xl md:rounded-full text-black shadow-lg border-[2px] hover:border-white hover:text-white hover:bg-black hover:duration-300 border-black "></i>
            </div>



            
</div>
          </div>













{/* Similar Movies Part */}

<div className='border-t-2 md:border-none mt-[20px] md:mt-0' >
<h1 id='infotitle' className=' text-2xl  text-center  text-white  h-fit py-2  md:mt-[50px]   md:text-4xl   ' >
            SIMILAR MOVIES
        
        </h1>



        <div className='flex items-center cursor-pointer justify-center  ' >


        <div className='hidden md:flex' >
        <i id='leftclick1' onClick={leftclick1} className=" fa-solid fa-caret-left lg:mx-[25px] md:mx-[20px] mx-[0px] bg-slate-300 md:px-[12px] min-w-fit max-w-fit md:py-[7px] text-xl rounded-full text-black shadow-lg   border-[2px] hover:border-white hover:text-white hover:bg-black hover:duration-300 border-black "></i>
        </div>


<div id='slider1'  className='flex  justify-between text-white  md:py-5 overflow-x-scroll md:overflow-hidden scroll-smooth   ' >
  <Item  scroll='no' display='hidden' url={`https://api.themoviedb.org/3/movie/${paramsID}/similar?api_key=7e5e27e6b51bcfd87532d3a63a2c2646&language=en-US&page=1`} wrap="no"    /> 
</div>

      <div className='hidden md:flex' >
      <i id='rightclick1' onClick={rightclick1} className=" fa-solid fa-caret-right lg:mx-[25px] md:mx-[20px] mx-[0px] bg-slate-300 md:px-[12px] min-w-fit max-w-fit md:py-[7px] text-xl rounded-full text-black shadow-lg border-[2px] hover:border-white hover:text-white hover:bg-black hover:duration-300 border-black "></i>
      </div>


  
</div>




</div>

















        





</div>



    </div>
  )
}

export default Iteminfo