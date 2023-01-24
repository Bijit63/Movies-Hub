import React from "react";
import { useState, useEffect } from "react";
import Itemcard from "./Itemcard";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../images/Loader.gif"
// import Loading from "./LoadingBar"
import filter from '../images/Filter.png'










const Item = (props) => {
    const [items, setitems] = useState([]);
    const [totalresults, settotalresults] = useState();
    const [page, setpage] = useState(1);
    
    const [genre, setgenre] = useState([]);
   



    const fetchData=()=>{

      fetch(props.url+`&page=${page}`)
        .then((info) => {
          return info.json();
          
        })




        .then((data) =>  {
                          props.limit==="yes"?setitems(data.results.slice(0,6)):setitems(data.results)

                            settotalresults(data.total_results)
                          // console.log(data.results)
                          // console.log(page)
                          setpage(page+1)
                          
                          
                          //Total no. of articles on the page needed
                          // console.log()
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
    },[]);


    const no= ()=>{}
    const yes = (p) => {

      setpage(page+1);
      
      setTimeout(() => {
        
        console.log(page)
       
        
        fetch(props.url+`&page=${page}`)
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


           const clickedd=()=>{
            
            document.getElementById('filtersec').className==="max-h-[0px] w-[88vw] justify-around flex duration-100 text-md  overflow-hidden px-[15px]"?document.getElementById('filtersec').className="h-fit w-[88vw] justify-around flex duration-100 text-md  overflow-hidden px-[15px]":document.getElementById('filtersec').className="max-h-[0px] w-[88vw] justify-around flex duration-100 text-md  overflow-hidden px-[15px]"



           }
     
    



  return <div className={`${props.height}`} >


      
       <div onClick={clicked} className={` ${props.display} flex-col  justify-center items-center md:mt-[50px] mt-[20px]   px-4 my-1 md:my-2` }>
       
       <div className="flex" >
          <div id="moviestype" className="md:text-5xl text-2xl ">{props.moviestype}</div>
          {/* <div className="md:w-[40px] w-[30px] mx-[10px] "  >
            <img src={filter} onClick={clickedd} alt="" className="cursor-pointer" />
          </div> */}
       </div>


       {/* <div id="filtersec" className="max-h-[0px] w-[88vw] justify-around flex duration-100 text-md  overflow-hidden px-[15px]">
        
           <div className="text-[18px] flex flex-col w-[40vw] text-white mt-[5px] " >
             <h1 className="text-center" >Sort By </h1> 
            <p className='bg-red-200 flex  mt-[5px]'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi error aliquid molestiae perspiciatis repellendus impedit minus ipsum illo maiores, odio deserunt ea, hic voluptatum natus porro quisquam mollitia enim pariatur nostrum? Minus sit porro nisi aspernatur commodi. Incidunt, veritatis, quam molestiae, mollitia beatae dicta facere voluptatibus sed earum asper
            </p>
           </div>



           <div className="text-[18px] flex flex-col w-[40vw] text-white mt-[5px] " >
            <h1 className="text-center" >Genre</h1> 
            <div id="genres" className=" flex flex-wrap mt-[5px] justify-start ">
            <p className="mx-[9px] my-[4px]" >Action</p>
            <p className="mx-[9px] my-[4px]" >Adventure</p>
            <p className="mx-[9px] my-[4px]" >Animation</p>
            <p className="mx-[9px] my-[4px]" >Comedy</p>
            <p className="mx-[9px] my-[4px]" >Crime</p>
            <p className="mx-[9px] my-[4px]" >Documentary</p>
            <p className="mx-[9px] my-[4px]" >Drama</p>
            <p className="mx-[9px] my-[4px]" >Family</p>
            <p className="mx-[9px] my-[4px]" >Fantasy</p>
            <p className="mx-[9px] my-[4px]" >History</p>
            <p className="mx-[9px] my-[4px]" >Horror</p>
            <p className="mx-[9px] my-[4px]" >Music</p>
            <p className="mx-[9px] my-[4px]" >Mystery</p>
            <p className="mx-[9px] my-[4px]" >Romance</p>
            <p className="mx-[9px] my-[4px]" >Science-Fiction</p>
            <p className="mx-[9px] my-[4px]" >Thriller</p>
            <p className="mx-[9px] my-[4px]" >War</p>
            <p className="mx-[9px] my-[4px]" >Western</p>
            </div>
           </div>
       


        </div> */}


        
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
