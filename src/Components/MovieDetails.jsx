import { Card } from "react-bootstrap";
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import MyNav from "./MyNav";

const MovieDetails = () => {
    const params = useParams()
    console.log('PARAMS ARE: ', params)
   const id=params.movieId
    const[movie,setMovie]=useState(null)
    const[comment,setComment]=useState("")
    const renderMovies=async()=>{
       try{
        let url="http://www.omdbapi.com/?tt3896198&apikey=e8194ce3&i="
        let res= await fetch(url+id,{method:"GET"})
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

           const renderComments =async ()=>{
        try{
            let url="https://striveschool-api.herokuapp.com/api/comments/"
            let res=await fetch(url+id,{
                method:"GET",
                headers:{
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzY3ZmU3MzczODAwMTUzNzQzN2IiLCJpYXQiOjE2NzUzNDYwODAsImV4cCI6MTY3NjU1NTY4MH0.SIu_YPXK-rmlAld9e5XWapiFpEehjmeZjaB2KWHM-GA"
                }
        })
         if(res.ok){
            let commentsFound= await res.json()
            setComment(commentsFound)
            console.log(commentsFound)
            
        }
        }catch(err){
            console.log(err)
        }
       }
   
    useEffect(()=>{
     renderMovies()
     renderComments()
    },[])

  
    return (
       <>
       <MyNav placeholder={"Search"}/>
        <div className="d-flex justify-content-center my-5">
        {movie!==null? <Card style={{ width: '18rem' ,color:"black"}}>
    <Card.Img variant="top" src={movie.Poster}/>
    <Card.Body>
      <Card.Title>{movie.Title}</Card.Title>
      {comment!==""? 
      <Card.Text>
       {comment.map((c)=>{
        return(
            <p>{c.comment}</p>
        )
       })}
      </Card.Text>:""}
     
    </Card.Body>
  </Card>:<h1>Loading...</h1>}
  </div>
  </>
 );
}
 
export default MovieDetails;