import Image from "next/image"
import  Tag  from "./Tag"
import Topic from "./Topic"
import { getPostsData, POSTS } from "@/app/libs/getPostsData"


const getTopicsData = (obj) => {
  const posts = obj['latest_posts'];
  const acc = []
  
  const filteredTopics = posts.filter(post => {
    if(!acc.includes(post['topic_id'])){
      acc.push(post['topic_id'])
      return post;
    }
  }).map(post => {
    return {id: post['topic_id'], name: post['topic_title']}
  })
  
  
  return filteredTopics
}

const getBlogsbyTopics = (ids, obj) => {
  const posts = obj['latest_posts'];
  const topicsId = ids.map(items=>items.id);
  const blogsByTopicId = {}

  topicsId.forEach((id) => {
    blogsByTopicId[id] = posts.filter(item => item['topic_id'] == id)
 })
  
  return blogsByTopicId;
}

const Blogs = async () => {
  
  const blogs = await getPostsData(POSTS)
  
  const topicsData = getTopicsData(blogs)

  const blogsDataFiltered = getBlogsbyTopics(topicsData, blogs)

  

  return (
    <div className='text-black flex items-center justify-center h-screen flex-col'>
        <h1>Ally Health Blog</h1>
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