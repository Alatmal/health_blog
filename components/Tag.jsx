import CustomButton from "./CustomButton"
import Link from "next/link"

const Tag = async ({topics}) => {
  
  return (
    <div className="flex">
    {topics.map((data) => (
    <Link href={`#${data.slug}`}>
    <CustomButton 
    title={data.name}
    key={`${data.id}tags`}
    />
    </Link>
    ))}
    </div>
  )
}


export default Tag