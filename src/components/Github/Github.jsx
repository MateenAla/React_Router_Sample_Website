import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {


    const data = useLoaderData()
    // const [data,setdata] = useState([])
    // useEffect(() => {
    //   fetch("https://api.github.com/users/MateenAla").then((res)=>{res.json()})
    //   .then((data)=>{console.log(data)
    //     setdata(data)
    //   })
    // }, [])
    
  return (
    <>
    <div className=' text-center bg-gray-500 m-4 p-3 text-3xl'>Github Followers: {data.followers} 
     </div>
    <img src={data.avatar_url} alt="Git Picture" width={300} />
    </>
  )
}

export default Github

export const githubInfoLoader =  async ()=>
    {
        const response = await  fetch("https://api.github.com/users/MateenAla")
        return response.json()
    }


    