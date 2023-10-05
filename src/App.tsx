import Post from './components/Post'
function App() {

  return (
		<div className="flex justify-center w-screen items-center h-screen bg-gray-100">
      <div> 
        <Post/>
          <div className='flex items-center gap-3 mt-3'> 
              {Array.from({length: 5}).map((value, index) => {
                return(
                  <button className="p-2 shadow-md rounded-md text-center font-bold w-full bg-blue-700 mb-2 text-white hover:cursor-pointer"> {index + 1} </button>
                )
              })}
          </div>
      </div>
    </div>


  )
}

export default App
