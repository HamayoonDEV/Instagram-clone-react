import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Post from './components/post';
import db from './firebase'


function App() {
  const [posts,setposts] = useState([])
  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot=>{
      setposts(snapshot.doc.map(doc=>doc.data()))
    })
  },[])
  return (
   <>
   <Navbar/>

   {
    posts.map(post=>(
      <Post username={post.username} caption={post.caption} imageurl= {post.imageurl} />
    ))
   }
 
   </>
  );
}

export default App;
