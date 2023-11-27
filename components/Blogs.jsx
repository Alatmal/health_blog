import  Tag  from "./Tag"
import Topic from "./Topic"
import { getPostsData, POSTS } from "@/app/libs/getPostsData"
import { getTopicsData, getBlogsbyTopics } from "@/utils/utils"

export const blogs = await getPostsData(POSTS)
  
const topicsData = getTopicsData(blogs)

const blogsDataFiltered = getBlogsbyTopics(topicsData, blogs)

const Blogs = async () => {
  
  return (
    <div className='text-black flex justify-center h-screen flex-col'>
        <h1 className="text-center mb-4 text-xl">Ally Health Blog</h1>
        <div>
            <Tag topics={topicsData}/>
        </div>
        <div>
            <Topic 
            topics={topicsData}
            blogsInfo={blogsDataFiltered}
            />
        </div> 
    </div>
  )
}

export default Blogs