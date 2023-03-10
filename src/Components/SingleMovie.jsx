
import { useEffect } from "react";
import { useState } from "react";
import { Card,Button, Row,Col } from "react-bootstrap";
import EditModal from "./EditModal";

const SingleMovie = () => {
const[movies,setMovies]=useState("")
const[query,setQuery]=useState("")
let [moviesArray,setMoviesArray]=useState([])
const getSingle=async()=>{
    let url=process.env.REACT_APP_BE_URL
    try{
        let res=""
        if(query===""){
         res =await fetch(url)
        }else{
           res= await fetch(url + `?title=${query}`)
        }
        console.log(res)
        if(res.ok){
           
           let jsonRes=await res.json()
           setMovies(jsonRes)
           console.log(movies)
          
        }
    }catch(err){
        console.log(err)
    }
}

const getMovies=async(a)=>{
    try{
        let url="http://www.omdbapi.com/?tt3896198&apikey=e8194ce3&s="
        let res= await fetch(url+a)
   console.log(res)
        if(res.ok){
            const data=await res.json()
            let singleMovie=data.Search
            setMovies(singleMovie)
            console.log(movies)
        }

    }catch(err){
   console.log(err)
    }
}
const deleteProd=async(id)=>{
    let url=process.env.REACT_APP_BE_URL+id
    try{
     let res= await fetch(url,
        {
            method:"DELETE",    
            headers:{
              "Content-Type":"application/json"
      
            },
          
          })
          if(res.ok){
            console.log("deleted")
          }
    }catch(err){
        console.log(err)
    }
}
useEffect(()=>{
getSingle()
     
},[query])

useEffect(()=>{
 movies && movies.map(m=>setMoviesArray(oldArray => [...oldArray, m.title]))


},[])

const [id,setId]=useState("")
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true)
const showAndSet=(i)=>{
    setId(i)
    handleShow()
}




    return ( <>
        
  <input type="text" value={query} onChange={(e)=>{setQuery(e.target.value)}}/>
  <Row>
    {movies && movies.map(m=>{
        return  <Col>  <Card style={{ width: '18rem' }}>
            
        <Card.Img variant="top" src={m.poster} />
        <Card.Body>
          <Card.Title style={{color:"black"}}>{m.title}</Card.Title>
          <Card.Text style={{color:"black"}}>
           <p>{m.year}</p>
           <p>{m.type}</p>
          </Card.Text>
          <Button variant="primary" onClick={()=>showAndSet(m._id)}>Edit</Button>
          <Button variant="danger" onClick={()=>deleteProd(m._id)}>Delete</Button>
        </Card.Body>
      </Card>
      </Col>


    })}
               <EditModal handleClose={handleClose} show={show} id={id}/>
    </Row>
    </> );
}
 
export default SingleMovie;