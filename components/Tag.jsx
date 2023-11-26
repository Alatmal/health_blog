import CustomButton from "./CustomButton"


const Tag = async ({topics}) => {
  
  return (
    <div>
    {topics.map((data) => (
    <CustomButton 
    title={data.name}
    key={data.id}
    />
    
    ))}
    </div>
  )
}


export default Tag