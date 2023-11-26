import Image from "next/image"

const Card = ({info, urlImage, user}) => {
  return (
    <div>
      <Image src={urlImage} width={20} height={20}/>
      <div className="flex flex-colum items-center justify-center">
        <h2>{user}</h2>
      </div>
    </div>
  )
}

export default Card