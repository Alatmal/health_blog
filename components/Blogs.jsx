import Image from "next/image"
import  Tag  from "./Tag"
import Topic from "./Topic"
import { getTopicsData } from "@/app/libs/getTopicsData"

const Blogs = async () => {
  const topicsData = await getTopicsData()
  return (
    <div className='text-black flex items-center justify-center h-screen flex-col'>
        <h1>Ally Health Blog</h1>
        <div>
            <Tag topics={topicsData}/>
        </div>
        <div>
            <Topic topics={topicsData}/>
        </div> 
    </div>
  )
}

export default Blogs