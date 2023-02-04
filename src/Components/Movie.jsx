
import { Component } from "react";
import { Carousel, Spinner,Alert} from 'react-bootstrap';
class Movie extends Component{
  
    state={
        AllMovies:[],
        isLoading:true,
        isError:false
    }
    

  renderMovies= async()=>{
    try{
        let url="http://www.omdbapi.com/?i=tt3896198&apikey=e8194ce3&s="

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
componentDidMount(){
    this.renderMovies()

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
            console.log(oneMovie)
          
          return(
     
        
            <img variant="top" src={oneMovie.Poster} key={oneMovie.imdbID} style={{height:"180px",width:"230px" ,marginLeft:"0.2em"}} alt=""/>
        
       
           
            )
           
        })}
 </Carousel.Item>
 <Carousel.Item style={{marginLeft:"2em"}}>
        {this.state.AllMovies.slice(6).map((oneMovie)=>{
            console.log(oneMovie)
          
          return(
            
            <img variant="top" src={oneMovie.Poster} key={oneMovie.imdbID}  style={{height:"180px",width:"230px" ,marginLeft:"0.2em"}} alt=""/>
            )
           
        })}
 </Carousel.Item>
        
         </Carousel>
        </>
        )
    }
}
export default Movie


