import Image from "next/image"
import Link from "next/link"


const Card = async({urlImage, user, url}) => {
  const sizeRgx = /{size}/gi
  let urlLinkImage = ''
  if(sizeRgx.test(urlImage)){
    urlLinkImage = `https://discourse-dev.ally.day${urlImage.replace(sizeRgx,'small')}`
  } else {
    urlLinkImage = `https://discourse-dev.ally.day${urlImage}`
  }
  
  return (
    <div>
      <Image src={urlLinkImage} width={60} height={60}/>
      <div className="flex flex-colum items-center justify-center">
        <h2>{user}</h2>
        <Link href={`/${url}`}>View More</Link>
      </div>
    </div>
  )
}

export default Card