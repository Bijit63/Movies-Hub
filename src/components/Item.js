import React from "react";
import { useState, useEffect } from "react";
import Itemcard from "./Itemcard";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../images/Loader.gif"
import down from '../images/down.png'
// import Loading from "./LoadingBar"










const Item = (props) => {
    const [items, setitems] = useState([]);
    const [totalresults, settotalresults] = useState();
    const [page, setpage] = useState(1);
    
    const [genre, setgenre] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
   

    
    // To refresh the page 

    useEffect(() => {

      if(localStorage.getItem('loc')!==window.location.href ) 
     {
       window.location.reload(false)
      
     }
    
      localStorage.setItem('loc',window.location.href);
    
    })






    const fetchData=()=>{
      
      fetch(props.url+`&with_genres=`+selectedGenres.join(',')+`&page=${page}`)
        .then((info) => {
          return info.json();
          
        })


        

        .then((data) =>  {
                          props.limit==="yes"?setitems(data.results.slice(0,6)):setitems(data.results)

                            settotalresults(data.total_results)

                         
                          setpage(page+1)
                     
                          
                          //Total no. of articles on the page needed
                         
                                              }
      );

      fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=7e5e27e6b51bcfd87532d3a63a2c2646&language=en-US"
      )
        .then((info) => {
          return info.json();
        })
        .then((data) => {setgenre(data.genres) });


    }






    useEffect(() => {

      

     fetchData();
     
     
         // eslint-disable-next-line 
    },[selectedGenres]);


    

    
    


    const no= ()=>{}
    const yes = (p) => {

      setpage(page+1);

      
      
      setTimeout(() => {
        
        
       
        
        fetch(props.url+`&with_genres=`+selectedGenres.join(',')+`&page=${page}`)
        .then((info) => {
          return info.json();
        }).then(
          data => {
            setitems(items.concat(data.results))
          }
        )
  
        
      }, 1000);
     
      
           };



           const clicked=()=>{
            document.getElementById('leftmenu').className=" translate-x-[1000px] ease-in-out duration-100 absolute top-0 right-0 flex flex-col  bg-[#82C3EC] h-[100vh] w-[200px] md:w-[350px]"
           }


          
           
           const toggleGenre = genreId => {
            if (selectedGenres.includes(genreId)) {
              setSelectedGenres(selectedGenres.filter(id => id !== genreId));
            } else {
              setSelectedGenres([...selectedGenres, genreId]);
            }
            
            setpage(page-1)

            
          };







          const togglefilter=()=>{

            if(document.getElementById('down').className==="duration-100 ease-in-out md:mx-[16px] mx-[7px] md:h-[25px] h-[17px] md:mt-[9px]")
            { 

            document.getElementById('filter').className=`${props.filter==='yes'?'flex':'hidden'}  text-white flex overflow-hidden py-[10px] md:py-[12px] `
            document.getElementById('down').className="duration-100 ease-in-out rotate-180 md:mx-[16px] mx-[7px] md:h-[25px] h-[17px] md:mt-[9px]"}


            else{
              document.getElementById('filter').className=`${props.filter==='yes'?'flex':'hidden'}  text-white  hidden overflow-hidden py-[10px] md:py-[12px] `
              document.getElementById('down').className="duration-100 ease-in-out md:mx-[16px] mx-[7px] md:h-[25px] h-[17px] md:mt-[9px]"

            }
            
          }

          



  return <div className={`${props.height}`} >


      
       <div onClick={clicked} className={` ${props.display} flex-col  justify-center items-center md:mt-[50px] mt-[20px]   px-4 my-1 md:my-2` }>
       
       <div className="flex items-center" >
          <div id="moviestype" className="md:text-5xl text-2xl ">{props.moviestype} </div>
          <img id="down" onClick={togglefilter} src={down} alt="" className="duration-100 ease-in-out md:mx-[16px] mx-[7px] md:h-[25px] h-[17px] md:mt-[9px]" />
          
       </div>



       <div id="filter" className={`${props.filter==='yes'?'flex':'hidden'}  text-white  hidden overflow-hidden py-[10px] md:py-[12px] `}>

       <div id="filtergen" className=" md:mx-[25px] mx-[18px] ">
      <div className="flex flex-wrap">
        
        {genre.map(genres => (
          <button id="genrefilter"
            key={genres.id} 
            className={`md:px-[6px] px-[5px] md:py-[5px] py-[4px] md:mx-[10px] mx-[5px] my-[3px] md:my-[5px] text-white md:text-sm text-xs   rounded ${
              selectedGenres.includes(genres.id)
                ? 'bg-[#100a46]'
                : 'bg-[#2012a3] hover:bg-[#170c77]'
            }`}
            onClick={() => toggleGenre(genres.id)}
          >
            {genres.name }
             <span className={`${selectedGenres.includes(genres.id)? ``:`hidden`}  `}>&nbsp;&nbsp;&#215;</span>
          </button>
        ))}
      </div>
    </div>
        
       </div>


       




        


        
         </div> 
       
      
      


     

      
  

  {/* FOR INFINITE SCROLL  */}

           
    <InfiniteScroll 
          dataLength={items.length}
          next={props.scroll==='no'?no:yes}
          hasMore={items.length !==totalresults }
          loader={props.scroll==='no'?"":<div className=" flex justify-center" ><img className=" md:w-[70px ] w-[40px] bg-transparent" src={Loader} alt="" /></div>}
          >

    <div className={`flex justify-center ${props.scroll}   ${props.wrap==='no'?'':'flex-wrap'} `}>
    {items.map(
      element => {
        return <Itemcard rounded={props.rounded} backdrop={element.backdrop_path} title={element.title} w={props.w} h={props.h} wimg={props.wimg} image={element.poster_path
        } id={element.id}  key={element.id}  date={element.release_date
        } genrenames={element.genre_ids.map(id=>  {return genre.map(details=>{ return id===details.id?details.name:' ' } )
      }
      )} />
       })}
        </div>
  </InfiniteScroll>


  
  


  </div>;
};

export default Item;
