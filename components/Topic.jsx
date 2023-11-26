import  Card  from "./Card"


const Topic = ({topics}) => {
  return (
    <div>
      {topics.map((topic)=>(
        <div>
        <h1 key={topic.id}>{topic.name}</h1>
        <Card/>
      </div>
      ))}
      
    </div>
  )
}

export default Topic