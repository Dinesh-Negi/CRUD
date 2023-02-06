import React from 'react';
import {Button, Form, FormControl} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState} from 'react';
import axios from 'axios';


const CreatePost = () => {
    const navigate= useNavigate();
    const [post, setPost]= useState({
        title:"",
        description:"",
    });

   const handleChange =(event)=>{
    const {name, value}= event.target;

    setPost(prev =>{
        return{
          ...prev,
          [name]:value,
        };
    });
   };

  /* useEffect(()=>{
      console.log(post);
   },[post]);*/

   const handleClick =(event)=>{
    event.preventDefault();

    axios.post("/create",post)
    .then(res=> console.log(res))
    .catch(err=> console.log(err));

navigate("posts")

   };

  return (
    <div style={{width:"90%", margin:"auto auto", textAlign:"center"}}>
      <h1>Create a Post</h1>
      <Form>
        <Form.Group>
           <FormControl
            name="title" 
            value={post.title}
           placeholder='Title'
           style={{marginBottom:"1rem"}}
           onChange={handleChange}
           />
           <FormControl
            name="description" 
            value={post.description}
           placeholder='Description'
           style={{marginBottom:"1rem"}}
           onChange={handleChange}
           />
        </Form.Group>
        <Button variant='outline-success' 
        style={{width:"100%", marginBottom:"1rem"}}
         onClick={handleClick}>CREATE POST</Button>
      </Form>
      <Button style={{width:"100%"}} 
      variant="outline-dark"
      onClick={()=>navigate(-1)}>BACK</Button>
    </div>
  )
}

export default CreatePost;
