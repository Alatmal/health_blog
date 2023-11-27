import React from 'react'
import { blogs } from '@/components/Blogs'



const page = ({params: {id}}) => {
  
  const [info] = blogs['latest_posts'].filter((item) => {
    return item.id == id 
  })
  return (
  
      <div>
        <h2>{info.name}</h2>
        {info.cooked}
      </div>
   

  )
}

export default page