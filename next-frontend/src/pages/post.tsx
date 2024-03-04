import Card from "@/components/postCard";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Post() {
    const [post, setPost] = useState([]);
    const router = useRouter()

    const getpost = async () => {
      const res = await axios.get("api/posts")
      setPost(res.data.posts)
    }
  
    useEffect(() => {
      getpost()
    }, [])
  
    return <div className="flex justify-center relative">

      <div className="flex flex-col gap-2 p-4 mt-16 w-2/4">
      <Button className="absolute top-5 left-50 " onClick={()=>{router.push('/addpost')}} >Add Post</Button>
        {post.map((item) => (
          <Card key={item.title} title={item.title} description={item.description} date={"2024-03-04T02:50:56.364Z"} />
          ))}
      </div>
    </div>
}

// export async function getStaticProps() {
//   const res = await fetch('api/posts')
//   const data = await res.json()
//   const post = data.posts
 
//   return {
//     props: {
//       post,
//     },
//   }
// }
  