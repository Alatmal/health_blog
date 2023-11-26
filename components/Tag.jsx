import CustomButton from "./CustomButton"


const Tag = async ({topics}) => {
  
  return (
    <div>
    {topics.map((data) => (
    <CustomButton 
    title={data.name}
    key={`${data.id}tags`}
    />
    
    ))}
    </div>
  )
}


export default Tag