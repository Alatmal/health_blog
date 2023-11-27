import Image from "next/image"
import Link from "next/link"
import { parseImageURL } from "@/utils/utils"


const Card = async({urlImage, user, url}) => {
  const urlLink = parseImageURL(urlImage)
   
  return (
    <div className="flex my-3">
      <Image src={urlLink} width={40} height={30}/>
      <div className="flex-colum ml-5">
        <h2>{user}</h2>
        <Link href={`/${url}`}>View More</Link>
      </div>
    </div>
  )
}

export default Card