import { useState,useEffect } from "react";
import { Modal,Button,Form } from "react-bootstrap";



const EditModal = ({handleClose,show,id}) => {

    let [movie,setMovie]=useState("")
    let [image, setImg] = useState("");
    const handleImage = (e) => {
      console.log(e.target.files[0]);
      setImg(e.target.files[0]);
    }

const getSingle=async(id)=>{
    let url=process.env.REACT_APP_BE_URL+id
    try{
        let res =await fetch(url)
        if(res.ok){
            console.log(id)
           let jsonRes=await res.json()
           setMovie(jsonRes)
          

        }
    }catch(err){
        console.log(err)
    }
}

useEffect(()=>{
    getSingle(id)
    
   },[show])
   const formData = new FormData();
formData.append("poster", image);
   const postImage=async(image)=>{
    const url=`${process.env.REACT_APP_BE_URL}${id}/poster`
    try{

        const res=await fetch(url,{
        method:"POST",
        body:image
        })
        if(res.ok){
            const image=await res.json()
          setMovie({...movie,imageUrl:image})
        }

    }catch(err){
        console.log(err)
    }
}


const updateMovie=async(newProd)=>{
    const url=process.env.REACT_APP_BE_URL+id
    try{
     let res=await fetch(url,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
    
          },
          body:JSON.stringify(newProd)

        })
        console.log(newProd)
       if(res.ok){
        setMovie(newProd)
     
       }
     
    
    }catch(err){
        console.log.log(err)
    }
}

const update=(product,pic)=>{
    updateMovie(product)
    postImage(pic)
 }
    return ( <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit {movie.title}</Modal.Title>
        </Modal.Header>
        {movie ?
        <Modal.Body>
             <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Year</Form.Label>
        <Form.Control 
        type="text" 
   
        value={movie.year}
        onChange={(e)=>setMovie({
            ...movie,
            year: e.target.value,
          })}
       />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Category</Form.Label>
        <Form.Control 
        type="text" 
   
        value={movie.type}
        onChange={(e)=>setMovie({
            ...movie,
            type: e.target.value,
          })}
       />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Image</Form.Label>
        <Form.Control 

        placeholder="Product Brand" 

        type="file"
        accept="image/*"
        onChange={handleImage}
      />
      </Form.Group>

        </Modal.Body>
        :""}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={update(movie,formData)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> );
}
 
export default EditModal;