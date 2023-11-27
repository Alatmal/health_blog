import  Card  from "./Card"
import Link from "next/link"

const Topic = ({topics, blogsInfo}) => {
  
  return (
    <>
      {topics.map((topic)=>(
      
      <div id={topic.slug} className="ml-10 mr-8 mt-5">
        <div className="w-full border-b border-solid border-slate-300">
        <h1 key={`${topic.id}topics`}>{topic.name}</h1>
        </div>
        
        {blogsInfo[topic.id].map((info) =>(
          
          
          <Card
            key={info.id}
            urlImage = {info.avatar_template}
            user = {info.username}
            url = {info.id}
          />
        
        ))}
        
      </div>
      ))}
      
    </>
  )
}

export default Topic