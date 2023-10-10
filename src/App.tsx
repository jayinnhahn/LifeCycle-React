import Post from './components/Post'
import { useEffect, useState } from 'react'
function App() {
  const [number, setNumber] = useState(1);
  const [post, setPost] = useState<{
    body: string;
    id: number;
    title: string;
    userId: Number;
  } | null>(null);
  
  // const fetchPost = async (id) => {
  //   try {    
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  //   const data = await response.json()

  //   setPost(data)

  //   } catch(error) {

  //   }
  //   finally(){
  //     console.log("done")
  //   }
  // }



  useEffect(() => {
    if (number){
      fetch('https://jsonplaceholder.typicode.com/posts/' + number)
      .then((response) => response.json())
      .then((data) => setPost(data))
    }

  }, [number])
   
  return (
		<div className="flex justify-center w-screen items-center h-screen bg-gray-100">
      <div> 
      {number}
      {post && <Post title={post.title} body={post.body}/>}
          <div className='flex items-center gap-3 mt-3'> 
              {Array.from({length: 5}).map((value, index) => {
                return(
                  <button className="p-2 shadow-md rounded-md text-center font-bold w-full bg-blue-700 mb-2 text-white hover:cursor-pointer" onClick={()=> setNumber(index + 1)} > {index + 1} </button>
                )
              })}
          </div>
      </div>
    </div>


  )
}

export default App
