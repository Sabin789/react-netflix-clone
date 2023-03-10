
import { Component } from "react";
import { Carousel, Spinner,Alert} from 'react-bootstrap';
import{Link} from "react-router-dom"
class Movie extends Component{
  
    state={
        AllMovies:[],
        isLoading:true,
        isError:false
    }
    

  renderMovies= async()=>{
    try{
        let url="http://www.omdbapi.com/?tt3896198&apikey=e8194ce3&s="

  let res= await fetch(url+this.props.name,{method:"GET"})
    if(res.ok){
  
 let data= await res.json()
  
 let singleMovie=data.Search
 
 this.setState({AllMovies:singleMovie})
 this.setState({isLoading:false})
    }else{
        this.setState({isLoading:false})
    }
 

    }catch(err){
    
        this.setState({isError:true})
        this.setState({isLoading:false})
        console.log(this.state.isError)
    }
  }
   url=process.env.REACT_APP_BE_URL+"/media"
  renderLocal=async(n)=>{

  try{



    let res=await fetch(n)
    console.log(res)
  //   if (res.ok){
  //  console.log("hi")
  //     const data=await res.json()

  //       console.log(data)
  //   }
  }catch(err){

  }
  }
componentDidMount(){
    this.renderMovies()
    this.renderLocal(this.url)
}


     


    render(){
      
       
        return(
            
            <>        
     
             {this.state.isLoading && ( 
          <Spinner animation="border" variant="success" />
        )}
               {this.state.isError && (
            <Alert variant="danger">Aww snap, we got an error!😨</Alert>
          )}
       <h3 style={{marginTop:"1em",marginLeft:"1.2em"}}>{this.props.name}</h3>
              <Carousel>
              <Carousel.Item style={{marginLeft:"2em"}}>
        {this.state.AllMovies.slice(0-6).map((oneMovie)=>{

          
          return(
     
        
            <Link key={oneMovie.imdbID} to={"/movie-details/"+oneMovie.imdbID}> <img variant="top" src={oneMovie.Poster}  style={{height:"180px",width:"230px" ,marginLeft:"0.2em"}} alt=""/></Link> 
        
       
           
            )
           
        })}
 </Carousel.Item>
 <Carousel.Item style={{marginLeft:"2em"}}>
        {this.state.AllMovies.slice(6).map((oneMovie)=>{
   
          
          return(
            
            <Link key={oneMovie.imdbID} to={"/movie-details/"+oneMovie.imdbID}> <img variant="top" src={oneMovie.Poster}  style={{height:"180px",width:"230px" ,marginLeft:"0.2em"}} alt=""/></Link> 
            )
           
        })}
 </Carousel.Item>
        
         </Carousel>
        </>
        )
    }
}
export default Movie


