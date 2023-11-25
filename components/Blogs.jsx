import Image from "next/image"
import  Tag  from "./Tag"
import Topic from "./Topic"

const Blogs = () => {
  return (
    <div className='text-black flex items-center justify-center h-screen flex-col'>
        <h1>algo1</h1>
        <div>
            <Tag />
        </div>
        <div>
            <Topic />
        </div> 
    </div>
  )
}

export default Blogs