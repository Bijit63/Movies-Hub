import React, { useEffect } from 'react'
import { useState } from 'react'
// import arr from "../images/Leftarr.png"
import { Link } from 'react-router-dom'




const Trendingmovie = () => {





    const [Movie1, setMovie1] = useState({})
    const [Movie2, setMovie2] = useState({})
    const [Movie3, setMovie3] = useState({})
    const [Movie4, setMovie4] = useState({})
    const [dotn, setdotn] = useState(1)
   
    const clicked=()=>{
      document.getElementById('leftmenu').className=" translate-x-[1000px] ease-in-out duration-100 absolute top-0 right-0 flex flex-col  bg-[#82C3EC] h-[100vh] w-[200px] md:w-[350px]"
     }

 


    useEffect(() => {


      // Movie No.1 

        fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=7e5e27e6b51bcfd87532d3a63a2c2646').then(data=> {return data.json()}).then(info=>{
          setMovie1(info.results[0])
          // console.log(info.results[0])    

          const a= 'https://image.tmdb.org/t/p/original'.concat(info.results[0].backdrop_path);
             
              document.getElementById('trendbg').style=`background: url(${a}); background-repeat: no-repeat no-repeat ;background-size:100vw 660px ;  `  })




      // Movie No.2

        fetch('https://api.themoviedb.org/3/movie/597?api_key=7e5e27e6b51bcfd87532d3a63a2c2646&language=en-US').then(data=> { return data.json() }).then(info => {

        setMovie2(info)

        const a= 'https://image.tmdb.org/t/p/original'.concat(info.backdrop_path);
             
              document.getElementById('bg2').style=`background: url(${a}); background-repeat: no-repeat no-repeat ;background-size: 100vw 660px  ;  `
        })
        

      


      //Movie No.3

        fetch('https://api.themoviedb.org/3/movie/350312?api_key=7e5e27e6b51bcfd87532d3a63a2c2646&language=en-US').then(data=> { return data.json() }).then(info => {

        setMovie3(info)

        const a= 'https://image.tmdb.org/t/p/original'.concat(info.backdrop_path);
             
              document.getElementById('indbg').style=`background: url(${a}); background-repeat: no-repeat no-repeat ;background-size: 100vw 660px  ;  `
        })
        

        



      // Movie No.4

      fetch('https://api.themoviedb.org/3/movie/634649?api_key=7e5e27e6b51bcfd87532d3a63a2c2646&language=en-US').then(data=> { return data.json() }).then(info => {

      setMovie4(info)

      const a= 'https://image.tmdb.org/t/p/original'.concat(info.backdrop_path);
           
            document.getElementById('collectionbg').style=`background: url(${a}); background-repeat: no-repeat no-repeat ;background-size: 100vw 660px  ;  `
      })
      


      // document.getElementById(`dot1`).checked =true;
        
      
    }, [])


 
   

    const rightarr=()=>{

      document.getElementById('itemss').scrollLeft=document.getElementById('itemss').scrollLeft+ window.innerWidth ;
      // if(document.getElementById('itemss').scrollLeft+window.innerWidth<(window.innerWidth*3)+1)
      // {
      //   setdotn(dotn+1)
      //   document.getElementById(`dot${dotn+1}`).checked =true;
        
      // }
      
    }
    
    
    const leftarr=()=>{
      
      document.getElementById('itemss').scrollLeft=document.getElementById('itemss').scrollLeft-window.innerWidth;
      // if(document.getElementById('itemss').scrollLeft+window.innerWidth>window.innerWidth)

      // { 
      //   setdotn(dotn-1)
      //   document.getElementById(`dot${dotn-1}`).checked =true;
        
      // }
    
    }


 
      


    


    




  return (
    
    <div onClick={clicked} id='upperhome' className=' flex flex-col items-center   '>
    

    <div className=' min-h-[230px] max-h-[230px] md:min-h-[330px]  md:max-h-[330px] items-center h-full flex justify-between w-[100vw]  ' >

    {/* <div onClick={leftarr} id='leftarr' className=' h-fit z-50 mx-[5px] md:mx-[20px] relative opacity-70 cursor-pointer lg:max-w-[60px] lg:min-w-[60px] md:min-w-[80px] md:max-w-[80px] min-w-[50px] max-w-[50px] ' >
    <img src={arr} alt="" /></div>

    <div onClick={rightarr} id='rightarr' className=' h-fit mx-[5px] md:mx-[20px] relative opacity-70 cursor-pointer lg:max-w-[60px] lg:min-w-[60px] z-50 md:min-w-[80px] md:max-w-[80px] min-w-[50px] max-w-[50px] ' >
    <img src={arr} alt="" /></div> */}


    </div>


    



    {/* Cards , Name and Background  */}





    <div id='itemss' className=' absolute scroll-smooth  overflow-hidden flex w-[100vw]  ' >

    




    {/* Movie 1  */}

    <ul className=' flex flex-col   w-[100vw] ' >

  <div className=' flex-col md:flex-row flex md:mt-0 mt-[15px] md:justify-center w-[100vw] mx-auto items-center md:h-[330px] h-[230px]  ' >

      <div className=' md:mx-[30px] ' >  
        <div className= 'cursor-default  text-white md:text-[52px] flex justify-center lg:w-[60vw] md:w-[50vw] text-[30px] lg:text-[70px]' id='trendname'>
             {Movie1.original_title}
        </div>
      </div>

        <div className=' flex ' >
          <Link to={`/details/${Movie1.id}/${Movie1.original_title}`} className=' ' ><img id='trendimg' className=' rounded-lg lg:h-[250px] h-[132px] max-w-[100px] min-w-[100px] md:max-w-[160px] md:min-w-[160px] lg:max-w-[180px] lg:min-w-[180px] ' src={'https://image.tmdb.org/t/p/original'.concat(Movie1.poster_path)} alt="" /></Link>
        </div>
  </div>
    

      <div id='trendbg' className=' absolute z-[-1] md:h-[330px] h-[230px]  min-w-[100vw] ' ></div>

      </ul>






  {/* mOVIE 2  */}
      
    <ul className=' flex flex-col   w-[100vw] ' >

  <div className=' flex-col md:flex-row flex md:mt-0 mt-[15px] md:justify-center w-[100vw] mx-auto items-center md:h-[330px] h-[230px]  ' >
      <div className=' md:mx-[30px] ' >  
      
        <div className= 'cursor-default text-white md:text-[52px] flex justify-center lg:w-[60vw] md:w-[50vw] text-[30px] lg:text-[70px]' id='trendname'>
             {Movie2.original_title}
        </div>
      </div>

        <div className=' flex ' >
          <Link to={`/details/${Movie2.id}/${Movie2.original_title}`} className=' ' ><img id='trendimg' className=' rounded-lg lg:h-[250px] h-[132px] max-w-[100px] min-w-[100px] md:max-w-[160px] md:min-w-[160px] lg:max-w-[180px] lg:min-w-[180px] ' src={'https://image.tmdb.org/t/p/original'.concat(Movie2.poster_path)} alt="" /></Link>
        </div>
  </div>
    

      <div id='bg2' className=' absolute z-[-1] md:h-[330px] h-[230px]  min-w-[100vw] ' ></div>

      </ul>














  {/* mOVIE 3 */}
      
    <ul className=' flex flex-col   w-[100vw] ' >

  <div className=' flex-col md:flex-row md:mt-0 mt-[15px] flex md:justify-center w-[100vw] mx-auto items-center md:h-[330px] h-[230px]   ' >
      <div className=' md:mx-[30px] ' >  
      
        <div className= 'cursor-default text-white md:text-[52px] flex justify-center lg:w-[60vw] md:w-[50vw] text-[30px] lg:text-[70px]' id='trendname'>
             {Movie3.title}
        </div>
      </div>

        <div className=' flex ' >
          <Link to={`/details/${Movie3.id}/${Movie3.title}`} className=' ' ><img id='trendimg' className=' rounded-lg lg:h-[250px] h-[132px] max-w-[100px] min-w-[100px] md:max-w-[160px] md:min-w-[160px] lg:max-w-[180px] lg:min-w-[180px] ' src={'https://image.tmdb.org/t/p/original'.concat(Movie3.poster_path)} alt="" /></Link>
        </div>
  </div>
    

      <div id='indbg' className=' absolute z-[-1] md:h-[330px] h-[230px]   min-w-[100vw] ' ></div>

      </ul>


      





  {/* mOVIE 4  */}
      
    <ul className=' flex flex-col w-[100vw] ' >

<div className=' flex-col md:flex-row md:mt-0 mt-[15px] flex md:justify-center w-[100vw] mx-auto items-center md:h-[330px] h-[230px]   ' >
    <div className=' md:mx-[30px] ' >  
    
      <div className= 'cursor-default text-white md:text-[52px] flex justify-center lg:w-[60vw] md:w-[50vw] text-[30px] lg:text-[70px]' id='trendname'>
           {Movie4.original_title}
      </div>
    </div>

      <div className=' flex ' >
        <Link to={`/details/${Movie4.id}/${Movie4.original_title}`} className=' ' ><img id='trendimg' className=' rounded-lg lg:h-[250px] h-[132px] max-w-[100px] min-w-[100px] md:max-w-[160px] md:min-w-[160px] lg:max-w-[180px] lg:min-w-[180px] ' src={'https://image.tmdb.org/t/p/original'.concat(Movie4.poster_path)} alt="" /></Link>
      </div>
</div>
  

    <div id='collectionbg' className=' absolute z-[-1] md:h-[330px] h-[230px]  min-w-[100vw] ' ></div>

    </ul>




    </div>




    {/* Dots  */}

    <div className='absolute  min-h-[230px]  max-h-[230px] md:min-h-[330px]  md:max-h-[330px] flex items-end  z-[-10] ' >
      <ul id='dots' className=' w-fit items-center mb-[13px]  flex h-fit justify-center opacity-100 '  >
      <li id='dot1' className=' h-[15px] w-[15px] mx-[7px] rounded-full bg-white ' name="r"></li>
      <li id='dot2' className=' h-[15px] w-[15px] mx-[7px] rounded-full bg-white ' name="r"></li>
      <li id='dot3' className=' h-[15px] w-[15px] mx-[7px] rounded-full bg-white ' name="r"></li>
      <li id='dot4' className=' h-[15px] w-[15px] mx-[7px] rounded-full bg-white ' name="r"></li>
      </ul>
      
    </div>



    







    



    </div>


   
    
  )
}

export default Trendingmovie