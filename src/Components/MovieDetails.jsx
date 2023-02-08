import { Card } from "react-bootstrap";
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
const MovieDetails = () => {
    const params = useParams()
    console.log('PARAMS ARE: ', params)
   const id=params.movieId
    const[movie,setMovie]=useState(null)
    const renderMovies=async()=>{
       try{
        let url=`http://www.omdbapi.com/?i=tt3896198&apikey=e8194ce3&i=${id}`
        let res= await fetch(url,{method:"GET"})
         if(res.ok){
           let movieFound= await res.json()
          console.log(res)
         console.log(movieFound)
           setMovie(movieFound)
         }
       }catch(err){
        console.log(err)
       }
       }
    useEffect(()=>{
      
     renderMovies()
    },[])
    return ( <Card style={{ width: '18rem' ,color:"black"}}>
    <Card.Img variant="top" src=""/>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
     
    </Card.Body>
  </Card>);
}
 
export default MovieDetails;