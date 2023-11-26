import  Card  from "./Card"
import Link from "next/link"

const Topic = ({topics, blogsInfo}) => {
  
  return (
    <div>
      {topics.map((topic)=>(
      <>
        <h1 key={`${topic.id}topics`}>{topic.name}</h1>
        {blogsInfo[topic.id].map((info) =>(
          
          
          <Card
            key={info.id}
            urlImage = {info.avatar_template}
            user = {info.username}
            url = {info.id}
          />
        
        ))}
        
      </>
      ))}
      
    </div>
  )
}

export default Topic