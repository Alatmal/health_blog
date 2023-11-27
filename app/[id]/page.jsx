import React from 'react'
import { blogs } from '@/components/Blogs'
import Image from 'next/image'

const parseImageURL = (urlImage) => {
  const sizeRgx = /{size}/gi
  let urlLinkImage = ''
  if(sizeRgx.test(urlImage)){
    urlLinkImage = `https://discourse-dev.ally.day${urlImage.replace(sizeRgx,'small')}`
  } else {
    urlLinkImage = `https://discourse-dev.ally.day${urlImage}`
  }
  return urlLinkImage
}

const page = ({params: {id}}) => {
  
  const [info] = blogs['latest_posts'].filter((item) => {
    return item.id == id 
  })
  return (
  
      <div>
        <div className='mt-10 flex flex-col items-center justify-center'>
        <Image src={parseImageURL(info.avatar_template)} width={70} height={60} className='my-5 mx-5 '/>
          <h2>{info.name}</h2>
        </div>
        <div className='mx-20 mt-10 text-black' dangerouslySetInnerHTML={ {__html: info.cooked}}></div>
        
      </div>
   

  )
}

export default page