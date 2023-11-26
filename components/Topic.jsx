import  Card  from "./Card"


const Topic = ({topics, blogsInfo}) => {
  
  return (
    <div>
      {topics.map((topic)=>(
        <div>
        <h1 key={`${topic.id}topics`}>{topic.name}</h1>
        {blogsInfo[topic.id].map((info) =>(
          
          
          <Card
            key={info.id}
            info = {info.raw}
            urlImage = {info.avatar_template}
            user = {info.username}
          />
        ))}
        
      </div>
      ))}
      
    </div>
  )
}

export default Topic