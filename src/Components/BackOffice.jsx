import { useState } from "react";
import { Form,Button } from "react-bootstrap";

const BackOffice = () => {

const[title,setTitle]=useState("")
const[year,setYear]=useState("")
const[type,setType]=useState("")
 const newMovie={title,year,type}


const postMovie=async(movie)=>{
    let url=process.env.REACT_APP_BE_URL
    try{
        let res=await fetch(url,{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
      
            },
            body:JSON.stringify(movie)

          })
          const jsonRes=await res.json()
          console.log(jsonRes)
    }catch(err){
        console.log(err)
    }
}




 const submitMovie=(e)=>{
    e.preventDefault()
    postMovie(newMovie)
}
    return (     <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Movie Title</Form.Label>
          <Form.Control type="text" placeholder="Enter movie title" 
             value={title.value}
             onChange={(e)=>setTitle(e.target.value)}/>

        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Year of Release</Form.Label>
          <Form.Control type="number" placeholder="Year of Release"
              value={year.value}
              onChange={(e)=>setYear(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Type</Form.Label>
          <Form.Control type="text" placeholder="Type" 
              value={year.value}
              onChange={(e)=>setYear(e.target.value)}/>
        </Form.Group>
  
        <Button variant="primary" type="submit"
        onClick={(e)=>submitMovie(e)}>
          Submit
        </Button>
      </Form> );
}
 
export default BackOffice;